import { RealizedType, TO2Type, UNKNOWN_TYPE } from "./to2-type";
import { Node, ValidationError } from ".";
import { InputPosition } from "../../parser";
import { ModuleContext } from "./context";
import { SemanticToken } from "../../syntax-token";

export class LookupTypeReference implements Node, TO2Type {
  public name: string;
  public description: string;
  public localName: string;

  constructor(
    public readonly namePath: string[],
    public readonly typeArguments: TO2Type[],
    public readonly start: InputPosition,
    public readonly end: InputPosition
  ) {
    this.name = namePath.join("::");
    this.description = "";
    this.localName = namePath.join("::");
  }

  public reduceNode<T>(
    combine: (previousValue: T, node: Node) => T,
    initialValue: T
  ): T {
    return combine(initialValue, this);
  }

  public validate(): ValidationError[] {
    const errors: ValidationError[] = [];

    return errors;
  }

  public realizedType(context: ModuleContext): RealizedType {
    return context.findType(this.namePath, this.typeArguments) ?? UNKNOWN_TYPE;
  }

  public collectSemanticTokens(semanticTokens: SemanticToken[]): void {}
}