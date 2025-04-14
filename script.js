
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-13 18:00:00", "b": 490.5}, {"a": "2025-04-13 18:05:00", "b": 486.4}, {"a": "2025-04-13 18:10:00", "b": 498.8}, {"a": "2025-04-13 18:15:00", "b": 519.8}, {"a": "2025-04-13 18:20:00", "b": 511.8}, {"a": "2025-04-13 18:25:00", "b": 498.0}, {"a": "2025-04-13 18:30:00", "b": 497.25}, {"a": "2025-04-13 18:35:00", "b": 482.2}, {"a": "2025-04-13 18:40:00", "b": 483.25}, {"a": "2025-04-13 18:45:00", "b": 480.5}, {"a": "2025-04-13 18:50:00", "b": 464.6}, {"a": "2025-04-13 18:55:00", "b": 461.6}, {"a": "2025-04-13 19:00:00", "b": 452.8}, {"a": "2025-04-13 19:05:00", "b": 436.8}, {"a": "2025-04-13 19:10:00", "b": 415.6}, {"a": "2025-04-13 19:15:00", "b": 419.4}, {"a": "2025-04-13 19:20:00", "b": 436.4}, {"a": "2025-04-13 19:25:00", "b": 431.6}, {"a": "2025-04-13 19:30:00", "b": 439.6}, {"a": "2025-04-13 19:35:00", "b": 447.4}, {"a": "2025-04-13 19:40:00", "b": 447.5}, {"a": "2025-04-13 19:45:00", "b": 444.25}, {"a": "2025-04-13 19:50:00", "b": 438.0}, {"a": "2025-04-13 19:55:00", "b": 439.75}, {"a": "2025-04-13 20:00:00", "b": 427.8}, {"a": "2025-04-13 20:05:00", "b": 428.0}, {"a": "2025-04-13 20:10:00", "b": 435.0}, {"a": "2025-04-13 20:15:00", "b": 421.2}, {"a": "2025-04-13 20:20:00", "b": 436.0}, {"a": "2025-04-13 20:25:00", "b": 429.2}, {"a": "2025-04-13 20:30:00", "b": 454.6}, {"a": "2025-04-13 20:35:00", "b": 462.0}, {"a": "2025-04-13 20:40:00", "b": 473.2}, {"a": "2025-04-13 20:45:00", "b": 509.4}, {"a": "2025-04-13 20:50:00", "b": 522.0}, {"a": "2025-04-13 20:55:00", "b": 541.0}, {"a": "2025-04-13 21:00:00", "b": 539.2}, {"a": "2025-04-13 21:05:00", "b": 533.0}, {"a": "2025-04-13 21:10:00", "b": 546.0}, {"a": "2025-04-13 21:15:00", "b": 529.0}, {"a": "2025-04-13 21:20:00", "b": 514.75}, {"a": "2025-04-13 21:25:00", "b": 529.0}, {"a": "2025-04-13 21:30:00", "b": 515.2}, {"a": "2025-04-13 21:35:00", "b": 503.2}, {"a": "2025-04-13 21:40:00", "b": 500.0}, {"a": "2025-04-13 21:45:00", "b": 506.6}, {"a": "2025-04-13 21:50:00", "b": 522.8}, {"a": "2025-04-13 21:55:00", "b": 518.0}, {"a": "2025-04-13 22:00:00", "b": 514.2}, {"a": "2025-04-13 22:05:00", "b": 520.0}, {"a": "2025-04-13 22:10:00", "b": 531.25}, {"a": "2025-04-13 22:15:00", "b": 526.75}, {"a": "2025-04-13 22:20:00", "b": 524.0}, {"a": "2025-04-13 22:25:00", "b": 510.0}, {"a": "2025-04-13 22:30:00", "b": 512.6}, {"a": "2025-04-13 22:35:00", "b": 514.3333333333334}, {"a": "2025-04-13 22:40:00", "b": 503.8}, {"a": "2025-04-13 22:45:00", "b": 501.6}, {"a": "2025-04-13 22:50:00", "b": 506.4}, {"a": "2025-04-13 22:55:00", "b": 497.5}, {"a": "2025-04-13 23:00:00", "b": 488.0}, {"a": "2025-04-13 23:05:00", "b": 479.25}, {"a": "2025-04-13 23:10:00", "b": 487.8}, {"a": "2025-04-13 23:15:00", "b": 480.25}, {"a": "2025-04-13 23:20:00", "b": 477.2}, {"a": "2025-04-13 23:25:00", "b": 474.4}, {"a": "2025-04-13 23:30:00", "b": 471.6}, {"a": "2025-04-13 23:35:00", "b": 481.2}, {"a": "2025-04-13 23:40:00", "b": 484.0}, {"a": "2025-04-13 23:45:00", "b": 490.4}, {"a": "2025-04-13 23:50:00", "b": 493.75}, {"a": "2025-04-13 23:55:00", "b": 497.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    