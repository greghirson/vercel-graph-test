
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-15 03:00:00", "b": 463.0}, {"a": "2024-11-15 03:05:00", "b": 470.8}, {"a": "2024-11-15 03:10:00", "b": 464.2}, {"a": "2024-11-15 03:15:00", "b": 454.6}, {"a": "2024-11-15 03:20:00", "b": 466.2}, {"a": "2024-11-15 03:25:00", "b": 467.6}, {"a": "2024-11-15 03:30:00", "b": 463.2}, {"a": "2024-11-15 03:35:00", "b": 463.8}, {"a": "2024-11-15 03:40:00", "b": 455.3333333333333}, {"a": "2024-11-15 03:45:00", "b": 460.8}, {"a": "2024-11-15 03:50:00", "b": 468.0}, {"a": "2024-11-15 03:55:00", "b": 456.6}, {"a": "2024-11-15 04:00:00", "b": 459.0}, {"a": "2024-11-15 04:05:00", "b": 452.0}, {"a": "2024-11-15 04:10:00", "b": 451.6}, {"a": "2024-11-15 04:15:00", "b": 454.5}, {"a": "2024-11-15 04:20:00", "b": 459.0}, {"a": "2024-11-15 04:25:00", "b": 453.2}, {"a": "2024-11-15 04:30:00", "b": 450.75}, {"a": "2024-11-15 04:35:00", "b": 456.0}, {"a": "2024-11-15 04:40:00", "b": 453.6}, {"a": "2024-11-15 04:45:00", "b": 432.4}, {"a": "2024-11-15 04:50:00", "b": 433.8}, {"a": "2024-11-15 04:55:00", "b": 462.0}, {"a": "2024-11-15 05:00:00", "b": 446.75}, {"a": "2024-11-15 05:05:00", "b": 444.75}, {"a": "2024-11-15 05:10:00", "b": 445.6}, {"a": "2024-11-15 05:15:00", "b": 424.4}, {"a": "2024-11-15 05:20:00", "b": 424.4}, {"a": "2024-11-15 05:25:00", "b": 439.0}, {"a": "2024-11-15 05:30:00", "b": 453.2}, {"a": "2024-11-15 05:35:00", "b": 449.0}, {"a": "2024-11-15 05:40:00", "b": 450.2}, {"a": "2024-11-15 05:45:00", "b": 425.2}, {"a": "2024-11-15 05:50:00", "b": 418.0}, {"a": "2024-11-15 05:55:00", "b": 436.75}, {"a": "2024-11-15 06:00:00", "b": 439.0}, {"a": "2024-11-15 06:05:00", "b": 433.25}, {"a": "2024-11-15 06:10:00", "b": 421.0}, {"a": "2024-11-15 06:15:00", "b": 411.75}, {"a": "2024-11-15 06:20:00", "b": 427.25}, {"a": "2024-11-15 06:25:00", "b": 429.0}, {"a": "2024-11-15 06:30:00", "b": 422.3333333333333}, {"a": "2024-11-15 06:35:00", "b": 422.0}, {"a": "2024-11-15 06:40:00", "b": 448.8}, {"a": "2024-11-15 06:45:00", "b": 466.75}, {"a": "2024-11-15 06:50:00", "b": 487.2}, {"a": "2024-11-15 06:55:00", "b": 513.0}, {"a": "2024-11-15 07:00:00", "b": 529.8}, {"a": "2024-11-15 07:05:00", "b": 547.8}, {"a": "2024-11-15 07:10:00", "b": 571.6666666666666}, {"a": "2024-11-15 07:15:00", "b": 590.2}, {"a": "2024-11-15 07:20:00", "b": 591.0}, {"a": "2024-11-15 07:25:00", "b": 599.6}, {"a": "2024-11-15 07:30:00", "b": 597.0}, {"a": "2024-11-15 07:35:00", "b": 600.8}, {"a": "2024-11-15 07:40:00", "b": 582.4}, {"a": "2024-11-15 07:45:00", "b": 580.25}, {"a": "2024-11-15 07:50:00", "b": 564.0}, {"a": "2024-11-15 07:55:00", "b": 533.2}, {"a": "2024-11-15 08:00:00", "b": 520.6}, {"a": "2024-11-15 08:05:00", "b": 535.0}, {"a": "2024-11-15 08:10:00", "b": 532.4}, {"a": "2024-11-15 08:15:00", "b": 511.75}, {"a": "2024-11-15 08:20:00", "b": 514.25}, {"a": "2024-11-15 08:25:00", "b": 522.6}, {"a": "2024-11-15 08:30:00", "b": 496.0}, {"a": "2024-11-15 08:35:00", "b": 499.6666666666667}, {"a": "2024-11-15 08:40:00", "b": 501.0}, {"a": "2024-11-15 08:45:00", "b": 499.0}, {"a": "2024-11-15 08:50:00", "b": 513.2}, {"a": "2024-11-15 08:55:00", "b": 492.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    