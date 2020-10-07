---
id: raw
title: Raw SQL
sidebar_label: Raw SQL
---

```rust
let query = "insert into films (code, title, date_prod, nn) values ($1, $2, $3, $4)";
let rows_changed = db
        .execute(
            query,
            &[&"abcde", &"film title", &chrono::NaiveDate::from_ymd(2020, 8, 30), &(2 as i32)]
        )
        .await
        .unwrap();
assert_eq!(1, rows_changed);

let query = "select * from films where nn = $1";
let row = db.query(query, &[&(2 as i32)]).await.unwrap();
assert_eq!("abcde", row[0].get::<&str, &str>("code"));
```
