# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## a good data model

- capture all the information the system needs
- capture only the information the system needs
- reflect reality (from the point of view of the system)
- is flexible, can evolve with they system
- guarantees 'data integrity', without sacrificing too much performance
- is driven by the way we access data

## Components

- entities (nouns:zoo, animal, species), like a resourse -> table
- properties -> columns or fields
- relationships -> foreign key

## Workflow

- identify entities (real and transcational)
- identify the properties
- identify relationships

## Relationships

- one to one
- one to many (most common)
- many to many

\_one species can have many animals

\_there can be more than one animal in a zoo

\_an animal could lived in more than one zoo

## Mantras

- every table must have a **Primary Key**
- work on **two or three** at a time
- **one to many** relationships are modeled using a **Foreign key**
- the **Foreign Key** always go to the many side
- the **Foreign key column** must be the **same type** as the **primary key** it reference
- **many to many** relationsihp are modeled using a **third table**
- **third table** could include other columns
