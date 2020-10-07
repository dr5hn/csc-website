---
id: delete
title: Delete
sidebar_label: Delete
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
    let mut result = MyEntity::first(&db, "id = $1", &[&id]).await.unwrap();
    let deleted: bool = result.delete(&db).await.unwrap();
}
```
