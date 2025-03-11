
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-10 15:00:00", "b": 473.25}, {"a": "2025-03-10 15:05:00", "b": 483.6}, {"a": "2025-03-10 15:10:00", "b": 483.6}, {"a": "2025-03-10 15:15:00", "b": 474.2}, {"a": "2025-03-10 15:20:00", "b": 462.5}, {"a": "2025-03-10 15:25:00", "b": 474.2}, {"a": "2025-03-10 15:30:00", "b": 469.75}, {"a": "2025-03-10 15:35:00", "b": 466.0}, {"a": "2025-03-10 15:40:00", "b": 453.5}, {"a": "2025-03-10 15:45:00", "b": 455.0}, {"a": "2025-03-10 15:50:00", "b": 464.5}, {"a": "2025-03-10 15:55:00", "b": 466.75}, {"a": "2025-03-10 16:00:00", "b": 475.0}, {"a": "2025-03-10 16:05:00", "b": 486.6}, {"a": "2025-03-10 16:10:00", "b": 477.2}, {"a": "2025-03-10 16:15:00", "b": 477.5}, {"a": "2025-03-10 16:20:00", "b": 497.8}, {"a": "2025-03-10 16:25:00", "b": 508.0}, {"a": "2025-03-10 16:30:00", "b": 497.0}, {"a": "2025-03-10 16:35:00", "b": 504.4}, {"a": "2025-03-10 16:40:00", "b": 511.0}, {"a": "2025-03-10 16:45:00", "b": 507.0}, {"a": "2025-03-10 16:50:00", "b": 519.2}, {"a": "2025-03-10 16:55:00", "b": 526.75}, {"a": "2025-03-10 17:00:00", "b": 499.0}, {"a": "2025-03-10 17:05:00", "b": 507.2}, {"a": "2025-03-10 17:10:00", "b": 508.0}, {"a": "2025-03-10 17:15:00", "b": 521.2}, {"a": "2025-03-10 17:20:00", "b": 514.6}, {"a": "2025-03-10 17:25:00", "b": 505.0}, {"a": "2025-03-10 17:30:00", "b": 503.75}, {"a": "2025-03-10 17:35:00", "b": 496.6}, {"a": "2025-03-10 17:40:00", "b": 494.8}, {"a": "2025-03-10 17:45:00", "b": 503.25}, {"a": "2025-03-10 17:50:00", "b": 513.2}, {"a": "2025-03-10 17:55:00", "b": 520.8}, {"a": "2025-03-10 18:00:00", "b": 520.4}, {"a": "2025-03-10 18:05:00", "b": 512.75}, {"a": "2025-03-10 18:10:00", "b": 514.75}, {"a": "2025-03-10 18:15:00", "b": 521.25}, {"a": "2025-03-10 18:20:00", "b": 511.6}, {"a": "2025-03-10 18:25:00", "b": 513.75}, {"a": "2025-03-10 18:30:00", "b": 529.8}, {"a": "2025-03-10 18:35:00", "b": 550.4}, {"a": "2025-03-10 18:40:00", "b": 580.0}, {"a": "2025-03-10 18:45:00", "b": 607.0}, {"a": "2025-03-10 18:50:00", "b": 614.4}, {"a": "2025-03-10 18:55:00", "b": 604.2}, {"a": "2025-03-10 19:00:00", "b": 601.75}, {"a": "2025-03-10 19:05:00", "b": 593.8}, {"a": "2025-03-10 19:10:00", "b": 598.0}, {"a": "2025-03-10 19:15:00", "b": 618.2}, {"a": "2025-03-10 19:20:00", "b": 626.0}, {"a": "2025-03-10 19:25:00", "b": 627.0}, {"a": "2025-03-10 19:30:00", "b": 635.2}, {"a": "2025-03-10 19:35:00", "b": 626.4}, {"a": "2025-03-10 19:40:00", "b": 619.0}, {"a": "2025-03-10 19:45:00", "b": 619.0}, {"a": "2025-03-10 19:50:00", "b": 625.25}, {"a": "2025-03-10 19:55:00", "b": 630.0}, {"a": "2025-03-10 20:00:00", "b": 635.5}, {"a": "2025-03-10 20:05:00", "b": 643.0}, {"a": "2025-03-10 20:10:00", "b": 638.0}, {"a": "2025-03-10 20:15:00", "b": 639.0}, {"a": "2025-03-10 20:20:00", "b": 638.6}, {"a": "2025-03-10 20:25:00", "b": 655.2}, {"a": "2025-03-10 20:30:00", "b": 654.5}, {"a": "2025-03-10 20:35:00", "b": 648.0}, {"a": "2025-03-10 20:40:00", "b": 645.8}, {"a": "2025-03-10 20:45:00", "b": 648.3333333333334}, {"a": "2025-03-10 20:50:00", "b": 643.5}, {"a": "2025-03-10 20:55:00", "b": 628.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    