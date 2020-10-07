const snippets = [
  {
    label: "Entity",
    code: `#[derive(Entity, Default)]
#[entity(table_name = "my_table_name")] // optional
#[index(name = "myindex", columns = "name, datetime", unique)] // optional
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

    datetime: Option<DateTime<Utc>>
}`,
  },
  {
    label: "Insert/Update",
    code: `#[derive(Entity, Default)]
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

    let creating = entity.save(&db).await.unwrap();
}`,
  },
  {
    label: "Select",
    code: `#[derive(Entity, Default)]
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
}`,
  },
  {
    label: "Delete",
    code: `#[derive(Entity, Default)]
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
}`,
  },
];

export default snippets;
