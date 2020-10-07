---
id: insert-update
title: Insert/Update
sidebar_label: Insert/Update
---

```rust
#[derive(Entity, Default)]
pub struct MyEntity {
    #[primary_key]
    id: i32,
    name: String,
}

#[tokio::main]
async fn main() {
    let mut entity = MyEntity::default();
    entity.name = "Hello world"

    let uri = "postgres://postgres:postgres@localhost/postgres";
    let db = Db::connect(&uri, 50, None).await.unwrap();

    // If it has value in the primary key it will update, otherwise it will save.
    // The result tells which operation was performed.
    let creating = entity.save(&db).await.unwrap();
}
```
