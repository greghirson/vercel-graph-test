
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 20:10:00", "b": 442.6}, {"a": "2024-10-27 20:15:00", "b": 413.75}, {"a": "2024-10-27 20:20:00", "b": 426.0}, {"a": "2024-10-27 20:25:00", "b": 453.8}, {"a": "2024-10-27 20:30:00", "b": 437.6}, {"a": "2024-10-27 20:35:00", "b": 444.75}, {"a": "2024-10-27 20:40:00", "b": 493.0}, {"a": "2024-10-27 20:45:00", "b": 478.6}, {"a": "2024-10-27 20:50:00", "b": 461.75}, {"a": "2024-10-27 20:55:00", "b": 449.8}, {"a": "2024-10-27 21:00:00", "b": 452.5}, {"a": "2024-10-27 21:05:00", "b": 466.0}, {"a": "2024-10-27 21:10:00", "b": 477.8}, {"a": "2024-10-27 21:15:00", "b": 453.0}, {"a": "2024-10-27 21:20:00", "b": 464.8}, {"a": "2024-10-27 21:25:00", "b": 471.0}, {"a": "2024-10-27 21:30:00", "b": 444.8}, {"a": "2024-10-27 21:35:00", "b": 439.8}, {"a": "2024-10-27 21:40:00", "b": 457.75}, {"a": "2024-10-27 21:45:00", "b": 478.2}, {"a": "2024-10-27 21:50:00", "b": 431.8}, {"a": "2024-10-27 21:55:00", "b": 437.0}, {"a": "2024-10-27 22:00:00", "b": 456.5}, {"a": "2024-10-27 22:05:00", "b": 453.0}, {"a": "2024-10-27 22:10:00", "b": 442.8}, {"a": "2024-10-27 22:15:00", "b": 451.4}, {"a": "2024-10-27 22:20:00", "b": 445.6}, {"a": "2024-10-27 22:25:00", "b": 464.0}, {"a": "2024-10-27 22:30:00", "b": 437.6}, {"a": "2024-10-27 22:35:00", "b": 420.0}, {"a": "2024-10-27 22:40:00", "b": 424.0}, {"a": "2024-10-27 22:45:00", "b": 446.5}, {"a": "2024-10-27 22:50:00", "b": 455.4}, {"a": "2024-10-27 22:55:00", "b": 451.0}, {"a": "2024-10-27 23:00:00", "b": 458.25}, {"a": "2024-10-27 23:05:00", "b": 451.0}, {"a": "2024-10-27 23:10:00", "b": 448.4}, {"a": "2024-10-27 23:15:00", "b": 462.8}, {"a": "2024-10-27 23:20:00", "b": 457.8}, {"a": "2024-10-27 23:25:00", "b": 444.0}, {"a": "2024-10-27 23:30:00", "b": 454.0}, {"a": "2024-10-27 23:35:00", "b": 465.0}, {"a": "2024-10-27 23:40:00", "b": 446.75}, {"a": "2024-10-27 23:45:00", "b": 439.75}, {"a": "2024-10-27 23:50:00", "b": 441.75}, {"a": "2024-10-27 23:55:00", "b": 453.0}, {"a": "2024-10-28 00:00:00", "b": 451.8}, {"a": "2024-10-28 00:05:00", "b": 435.0}, {"a": "2024-10-28 00:10:00", "b": 443.75}, {"a": "2024-10-28 00:15:00", "b": 452.6}, {"a": "2024-10-28 00:20:00", "b": 454.0}, {"a": "2024-10-28 00:25:00", "b": 443.0}, {"a": "2024-10-28 00:30:00", "b": 439.5}, {"a": "2024-10-28 00:35:00", "b": 445.6}, {"a": "2024-10-28 00:40:00", "b": 439.5}, {"a": "2024-10-28 00:45:00", "b": 436.0}, {"a": "2024-10-28 00:50:00", "b": 441.4}, {"a": "2024-10-28 00:55:00", "b": 427.6}, {"a": "2024-10-28 01:00:00", "b": 445.0}, {"a": "2024-10-28 01:05:00", "b": 445.6}, {"a": "2024-10-28 01:10:00", "b": 461.25}, {"a": "2024-10-28 01:15:00", "b": 457.6}, {"a": "2024-10-28 01:20:00", "b": 443.0}, {"a": "2024-10-28 01:25:00", "b": 445.75}, {"a": "2024-10-28 01:30:00", "b": 461.75}, {"a": "2024-10-28 01:35:00", "b": 442.5}, {"a": "2024-10-28 01:40:00", "b": 443.0}, {"a": "2024-10-28 01:45:00", "b": 455.6}, {"a": "2024-10-28 01:50:00", "b": 450.0}, {"a": "2024-10-28 01:55:00", "b": 444.6666666666667}, {"a": "2024-10-28 02:00:00", "b": 437.0}, {"a": "2024-10-28 02:05:00", "b": 439.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    