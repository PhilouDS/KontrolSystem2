# ksp::addons

Provides access to optional addons.


## Types


### FlightPlan



#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
version | string | R/O | 

#### Methods

##### circularize

```rust
flightplan.circularize ( burnUt : float,
                         burnOffsetFactor : float ) -> bool
```



##### course_correction

```rust
flightplan.course_correction ( burnUt : float,
                               burnOffsetFactor : float ) -> bool
```



##### ellipticize

```rust
flightplan.ellipticize ( burnUt : float,
                         newAp : float,
                         newPe : float,
                         burnOffsetFactor : float ) -> bool
```



##### hohmann_transfer

```rust
flightplan.hohmann_transfer ( burnUt : float,
                              burnOffsetFactor : float ) -> bool
```



##### intercept_tgt

```rust
flightplan.intercept_tgt ( burnUt : float,
                           tgtUt : float,
                           burnOffsetFactor : float ) -> bool
```



##### match_planes

```rust
flightplan.match_planes ( burnUt : float,
                          burnOffsetFactor : float ) -> bool
```



##### match_velocity

```rust
flightplan.match_velocity ( burnUt : float,
                            burnOffsetFactor : float ) -> bool
```



##### moon_return

```rust
flightplan.moon_return ( burnUt : float,
                         burnOffsetFactor : float ) -> bool
```



##### planetary_xfer

```rust
flightplan.planetary_xfer ( burnUt : float,
                            burnOffsetFactor : float ) -> bool
```



##### set_inclination

```rust
flightplan.set_inclination ( burnUt : float,
                             inclination : float,
                             burnOffsetFactor : float ) -> bool
```



##### set_new_ap

```rust
flightplan.set_new_ap ( burnUt : float,
                        newAp : float,
                        burnOffsetFactor : float ) -> bool
```



##### set_new_lan

```rust
flightplan.set_new_lan ( burnUt : float,
                         newLanValue : float,
                         burnOffsetFactor : float ) -> bool
```



##### set_new_pe

```rust
flightplan.set_new_pe ( burnUt : float,
                        newPe : float,
                        burnOffsetFactor : float ) -> bool
```



##### set_new_sma

```rust
flightplan.set_new_sma ( burnUt : float,
                         newSma : float,
                         burnOffsetFactor : float ) -> bool
```



##### set_node_longitude

```rust
flightplan.set_node_longitude ( burnUt : float,
                                newNodeLongValue : float,
                                burnOffsetFactor : float ) -> bool
```



## Functions


### flight_plan

```rust
pub sync fn flight_plan ( ) -> Option<ksp::addons::FlightPlan>
```

Access the "Flight Plan" API (https://github.com/schlosrat/FlightPlan)
Will be undefined if FlightPlan is not installed.

