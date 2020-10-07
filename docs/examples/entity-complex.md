---
id: entity-complex
title: Entity (Complex)
sidebar_label: Entity (Complex)
---

```rust
#[derive(Entity, Default)]
#[entity(table_name = "my_table_name")] // optional
#[index(name = "myindex", columns = "name, datetime", unique)] // optional
#[has_many(model = "OtherEntity", field = "entity_id")]
#[has_many(model = "OtherEntityM2M", field = "entity_id", through = "MyEntityM2M")] // optional
pub struct MyEntity {
    #[primary_key]
    id: i32,
    name: String,

    #[indexed] // optional
    integer: i32,
    integer64: i64,

    float: f32,
    double: f64,

    boolean: bool,

    datetime: Option<DateTime<Utc>>,

    #[relation(model = "RelatedEntity", key = "id")]
    related_entity_id: i32,
}
```
