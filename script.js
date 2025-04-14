
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-13 21:00:00", "b": 539.2}, {"a": "2025-04-13 21:05:00", "b": 533.0}, {"a": "2025-04-13 21:10:00", "b": 546.0}, {"a": "2025-04-13 21:15:00", "b": 529.0}, {"a": "2025-04-13 21:20:00", "b": 514.75}, {"a": "2025-04-13 21:25:00", "b": 529.0}, {"a": "2025-04-13 21:30:00", "b": 515.2}, {"a": "2025-04-13 21:35:00", "b": 503.2}, {"a": "2025-04-13 21:40:00", "b": 500.0}, {"a": "2025-04-13 21:45:00", "b": 506.6}, {"a": "2025-04-13 21:50:00", "b": 522.8}, {"a": "2025-04-13 21:55:00", "b": 518.0}, {"a": "2025-04-13 22:00:00", "b": 514.2}, {"a": "2025-04-13 22:05:00", "b": 520.0}, {"a": "2025-04-13 22:10:00", "b": 531.25}, {"a": "2025-04-13 22:15:00", "b": 526.75}, {"a": "2025-04-13 22:20:00", "b": 524.0}, {"a": "2025-04-13 22:25:00", "b": 510.0}, {"a": "2025-04-13 22:30:00", "b": 512.6}, {"a": "2025-04-13 22:35:00", "b": 514.3333333333334}, {"a": "2025-04-13 22:40:00", "b": 503.8}, {"a": "2025-04-13 22:45:00", "b": 501.6}, {"a": "2025-04-13 22:50:00", "b": 506.4}, {"a": "2025-04-13 22:55:00", "b": 497.5}, {"a": "2025-04-13 23:00:00", "b": 488.0}, {"a": "2025-04-13 23:05:00", "b": 479.25}, {"a": "2025-04-13 23:10:00", "b": 487.8}, {"a": "2025-04-13 23:15:00", "b": 480.25}, {"a": "2025-04-13 23:20:00", "b": 477.2}, {"a": "2025-04-13 23:25:00", "b": 474.4}, {"a": "2025-04-13 23:30:00", "b": 471.6}, {"a": "2025-04-13 23:35:00", "b": 481.2}, {"a": "2025-04-13 23:40:00", "b": 484.0}, {"a": "2025-04-13 23:45:00", "b": 490.4}, {"a": "2025-04-13 23:50:00", "b": 493.75}, {"a": "2025-04-13 23:55:00", "b": 497.6666666666667}, {"a": "2025-04-14 00:00:00", "b": 491.5}, {"a": "2025-04-14 00:05:00", "b": 497.25}, {"a": "2025-04-14 00:10:00", "b": 491.8}, {"a": "2025-04-14 00:15:00", "b": 473.2}, {"a": "2025-04-14 00:20:00", "b": 478.75}, {"a": "2025-04-14 00:25:00", "b": 475.0}, {"a": "2025-04-14 00:30:00", "b": 485.5}, {"a": "2025-04-14 00:35:00", "b": 475.0}, {"a": "2025-04-14 00:40:00", "b": 465.4}, {"a": "2025-04-14 00:45:00", "b": 464.6}, {"a": "2025-04-14 00:50:00", "b": 467.0}, {"a": "2025-04-14 00:55:00", "b": 476.5}, {"a": "2025-04-14 01:00:00", "b": 471.6}, {"a": "2025-04-14 01:05:00", "b": 467.0}, {"a": "2025-04-14 01:10:00", "b": 469.0}, {"a": "2025-04-14 01:15:00", "b": 465.8}, {"a": "2025-04-14 01:20:00", "b": 462.2}, {"a": "2025-04-14 01:25:00", "b": 464.2}, {"a": "2025-04-14 01:30:00", "b": 471.2}, {"a": "2025-04-14 01:35:00", "b": 467.4}, {"a": "2025-04-14 01:40:00", "b": 453.25}, {"a": "2025-04-14 01:45:00", "b": 440.5}, {"a": "2025-04-14 01:50:00", "b": 445.2}, {"a": "2025-04-14 01:55:00", "b": 444.6}, {"a": "2025-04-14 02:00:00", "b": 443.25}, {"a": "2025-04-14 02:05:00", "b": 446.0}, {"a": "2025-04-14 02:10:00", "b": 447.0}, {"a": "2025-04-14 02:15:00", "b": 454.4}, {"a": "2025-04-14 02:20:00", "b": 446.5}, {"a": "2025-04-14 02:25:00", "b": 449.75}, {"a": "2025-04-14 02:30:00", "b": 450.5}, {"a": "2025-04-14 02:35:00", "b": 456.75}, {"a": "2025-04-14 02:40:00", "b": 449.6}, {"a": "2025-04-14 02:45:00", "b": 458.75}, {"a": "2025-04-14 02:50:00", "b": 463.0}, {"a": "2025-04-14 02:55:00", "b": 460.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    