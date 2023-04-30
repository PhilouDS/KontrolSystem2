import { Expression, Node, ValidationError } from ".";
import { TO2Type } from "./to2-type";
import { InputPosition } from "../../parser";
import { SemanticToken } from "../../syntax-token";

export class MethodDeclaration implements Node {
  constructor(
    public readonly isAsync: boolean,
    public readonly name: string,
    public readonly description: string,
    public readonly declaredReturn: TO2Type,
    public readonly expression: Expression,
    public readonly start: InputPosition,
    public readonly end: InputPosition
  ) {}

  reduceNode<T>(
    combine: (previousValue: T, node: Node) => T,
    initialValue: T
  ): T {
    return this.expression.reduceNode(combine, combine(initialValue, this));
  }

  public validate(): ValidationError[] {
    const errors: ValidationError[] = [];

    return errors;
  }

  public collectSemanticTokens(semanticTokens: SemanticToken[]): void {}
}