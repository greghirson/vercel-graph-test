
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-26 05:00:00", "b": 641.0}, {"a": "2025-01-26 05:05:00", "b": 602.2}, {"a": "2025-01-26 05:10:00", "b": 592.4}, {"a": "2025-01-26 05:15:00", "b": 600.0}, {"a": "2025-01-26 05:20:00", "b": 620.0}, {"a": "2025-01-26 05:25:00", "b": 620.25}, {"a": "2025-01-26 05:30:00", "b": 623.6}, {"a": "2025-01-26 05:35:00", "b": 627.6666666666666}, {"a": "2025-01-26 05:40:00", "b": 623.8}, {"a": "2025-01-26 05:45:00", "b": 612.4}, {"a": "2025-01-26 05:50:00", "b": 609.0}, {"a": "2025-01-26 05:55:00", "b": 624.2}, {"a": "2025-01-26 06:00:00", "b": 620.75}, {"a": "2025-01-26 06:05:00", "b": 609.2}, {"a": "2025-01-26 06:10:00", "b": 601.4}, {"a": "2025-01-26 06:15:00", "b": 596.75}, {"a": "2025-01-26 06:20:00", "b": 582.6}, {"a": "2025-01-26 06:25:00", "b": 564.0}, {"a": "2025-01-26 06:30:00", "b": 568.25}, {"a": "2025-01-26 06:35:00", "b": 567.8}, {"a": "2025-01-26 06:40:00", "b": 556.6}, {"a": "2025-01-26 06:45:00", "b": 550.8}, {"a": "2025-01-26 06:50:00", "b": 545.8}, {"a": "2025-01-26 06:55:00", "b": 561.8}, {"a": "2025-01-26 07:00:00", "b": 595.6}, {"a": "2025-01-26 07:05:00", "b": 624.8}, {"a": "2025-01-26 07:10:00", "b": 597.6}, {"a": "2025-01-26 07:15:00", "b": 579.4}, {"a": "2025-01-26 07:20:00", "b": 568.0}, {"a": "2025-01-26 07:25:00", "b": 556.25}, {"a": "2025-01-26 07:30:00", "b": 544.0}, {"a": "2025-01-26 07:35:00", "b": 547.25}, {"a": "2025-01-26 07:40:00", "b": 540.25}, {"a": "2025-01-26 07:45:00", "b": 540.6}, {"a": "2025-01-26 07:50:00", "b": 541.5}, {"a": "2025-01-26 07:55:00", "b": 507.6}, {"a": "2025-01-26 08:00:00", "b": 497.0}, {"a": "2025-01-26 08:05:00", "b": 507.0}, {"a": "2025-01-26 08:10:00", "b": 518.6}, {"a": "2025-01-26 08:15:00", "b": 531.0}, {"a": "2025-01-26 08:20:00", "b": 522.75}, {"a": "2025-01-26 08:25:00", "b": 513.8}, {"a": "2025-01-26 08:30:00", "b": 519.75}, {"a": "2025-01-26 08:35:00", "b": 516.4}, {"a": "2025-01-26 08:40:00", "b": 505.6}, {"a": "2025-01-26 08:45:00", "b": 505.2}, {"a": "2025-01-26 08:50:00", "b": 507.0}, {"a": "2025-01-26 08:55:00", "b": 502.0}, {"a": "2025-01-26 09:00:00", "b": 494.5}, {"a": "2025-01-26 09:05:00", "b": 468.0}, {"a": "2025-01-26 09:10:00", "b": 477.0}, {"a": "2025-01-26 09:15:00", "b": 508.4}, {"a": "2025-01-26 09:20:00", "b": 539.4}, {"a": "2025-01-26 09:25:00", "b": 585.4}, {"a": "2025-01-26 09:30:00", "b": 598.8}, {"a": "2025-01-26 09:35:00", "b": 744.2}, {"a": "2025-01-26 09:40:00", "b": 638.2}, {"a": "2025-01-26 09:45:00", "b": 594.8}, {"a": "2025-01-26 09:50:00", "b": 585.5}, {"a": "2025-01-26 09:55:00", "b": 593.0}, {"a": "2025-01-26 10:00:00", "b": 577.0}, {"a": "2025-01-26 10:05:00", "b": 568.4}, {"a": "2025-01-26 10:10:00", "b": 574.6}, {"a": "2025-01-26 10:15:00", "b": 574.0}, {"a": "2025-01-26 10:20:00", "b": 570.0}, {"a": "2025-01-26 10:25:00", "b": 564.2}, {"a": "2025-01-26 10:30:00", "b": 557.75}, {"a": "2025-01-26 10:35:00", "b": 559.0}, {"a": "2025-01-26 10:40:00", "b": 568.8}, {"a": "2025-01-26 10:45:00", "b": 575.75}, {"a": "2025-01-26 10:50:00", "b": 569.0}, {"a": "2025-01-26 10:55:00", "b": 578.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    