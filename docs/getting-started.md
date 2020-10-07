---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /
---

[![Actions Status][ci-badge]][ci-url]
[![Crates.io][crates-badge]][crates-url]
[![API Docs][docs-badge]][docs-url]
[![MIT licensed][mit-badge]][mit-url]
[![Gitter](https://badges.gitter.im/oxidizer-rs/community.svg)][glitter-url]

[ci-badge]: https://github.com/oxidizer-rs/oxidizer/workflows/test/badge.svg
[ci-url]: https://github.com/oxidizer-rs/oxidizer/actions
[crates-badge]: https://img.shields.io/crates/v/oxidizer.svg
[crates-url]: https://crates.io/crates/oxidizer
[docs-badge]: https://docs.rs/oxidizer/badge.svg
[docs-url]: https://docs.rs/oxidizer
[mit-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]: https://github.com/oxidizer-rs/oxidizer/blob/main/LICENSE
[glitter-url]: https://gitter.im/oxidizer-rs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

A Rust ORM based on [tokio-postgres](https://crates.io/crates/tokio-postgres) and [refinery](https://crates.io/crates/refinery) that helps you reduce the boilerplate of writing entities, tables & migrations when using tokio-postgres and refinery.

- Asynchronous from the ground up. All the database operations are
  efficiently handled by tokio at runtime.
- Oxidizer macros generate code to access relations between entities with ease. Forward and reverse relations are supported.

:::caution

Note that, while functional and working, this is in early stages. Use with caution.

:::
