---
id: select
title: Select
sidebar_label: Select
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
    let uri = "postgres://postgres:postgres@localhost/postgres";
    let db = Db::connect(&uri, 50, None).await.unwrap();

    let id = 1;
    let results = MyEntity::find(&db, "id = $1", &[&id]).await.unwrap();
}
```
