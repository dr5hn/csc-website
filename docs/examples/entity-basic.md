---
id: entity-basic
title: Entity (Basic)
sidebar_label: Entity (Basic)
---

```rust
#[derive(Entity, Default)]
pub struct MyEntity {
    #[primary_key]
    id: i32,
    name: String,
}
```
