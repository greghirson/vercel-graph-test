
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-07 02:00:00", "b": 577.3333333333334}, {"a": "2024-12-07 02:05:00", "b": 573.4}, {"a": "2024-12-07 02:10:00", "b": 586.6}, {"a": "2024-12-07 02:15:00", "b": 586.4}, {"a": "2024-12-07 02:20:00", "b": 588.6}, {"a": "2024-12-07 02:25:00", "b": 589.8}, {"a": "2024-12-07 02:30:00", "b": 586.75}, {"a": "2024-12-07 02:35:00", "b": 585.6}, {"a": "2024-12-07 02:40:00", "b": 625.4}, {"a": "2024-12-07 02:45:00", "b": 672.8}, {"a": "2024-12-07 02:50:00", "b": 617.6}, {"a": "2024-12-07 02:55:00", "b": 602.6}, {"a": "2024-12-07 03:00:00", "b": 591.75}, {"a": "2024-12-07 03:05:00", "b": 569.4}, {"a": "2024-12-07 03:10:00", "b": 553.4}, {"a": "2024-12-07 03:15:00", "b": 552.2}, {"a": "2024-12-07 03:20:00", "b": 540.6}, {"a": "2024-12-07 03:25:00", "b": 534.6}, {"a": "2024-12-07 03:30:00", "b": 528.0}, {"a": "2024-12-07 03:35:00", "b": 530.4}, {"a": "2024-12-07 03:40:00", "b": 538.6666666666666}, {"a": "2024-12-07 03:45:00", "b": 532.6}, {"a": "2024-12-07 03:50:00", "b": 540.0}, {"a": "2024-12-07 03:55:00", "b": 529.25}, {"a": "2024-12-07 04:00:00", "b": 525.5}, {"a": "2024-12-07 04:05:00", "b": 518.2}, {"a": "2024-12-07 04:10:00", "b": 537.4}, {"a": "2024-12-07 04:15:00", "b": 540.4}, {"a": "2024-12-07 04:20:00", "b": 527.8}, {"a": "2024-12-07 04:25:00", "b": 538.0}, {"a": "2024-12-07 04:30:00", "b": 554.6666666666666}, {"a": "2024-12-07 04:35:00", "b": 556.5}, {"a": "2024-12-07 04:40:00", "b": 583.6}, {"a": "2024-12-07 04:45:00", "b": 1150.4}, {"a": "2024-12-07 04:50:00", "b": 1080.4}, {"a": "2024-12-07 04:55:00", "b": 840.4}, {"a": "2024-12-07 05:00:00", "b": 694.8}, {"a": "2024-12-07 05:05:00", "b": 520.4}, {"a": "2024-12-07 05:10:00", "b": 491.75}, {"a": "2024-12-07 05:15:00", "b": 497.8}, {"a": "2024-12-07 05:20:00", "b": 504.25}, {"a": "2024-12-07 05:25:00", "b": 507.0}, {"a": "2024-12-07 05:30:00", "b": 494.5}, {"a": "2024-12-07 05:35:00", "b": 486.6666666666667}, {"a": "2024-12-07 05:40:00", "b": 497.2}, {"a": "2024-12-07 05:45:00", "b": 501.8}, {"a": "2024-12-07 05:50:00", "b": 498.6}, {"a": "2024-12-07 05:55:00", "b": 502.25}, {"a": "2024-12-07 06:00:00", "b": 503.6}, {"a": "2024-12-07 06:05:00", "b": 493.2}, {"a": "2024-12-07 06:10:00", "b": 490.5}, {"a": "2024-12-07 06:15:00", "b": 492.8}, {"a": "2024-12-07 06:20:00", "b": 488.4}, {"a": "2024-12-07 06:25:00", "b": 487.75}, {"a": "2024-12-07 06:30:00", "b": 490.5}, {"a": "2024-12-07 06:35:00", "b": 490.0}, {"a": "2024-12-07 06:40:00", "b": 482.0}, {"a": "2024-12-07 06:45:00", "b": 472.6}, {"a": "2024-12-07 06:50:00", "b": 468.2}, {"a": "2024-12-07 06:55:00", "b": 488.2}, {"a": "2024-12-07 07:00:00", "b": 484.8}, {"a": "2024-12-07 07:05:00", "b": 494.0}, {"a": "2024-12-07 07:10:00", "b": 498.6}, {"a": "2024-12-07 07:15:00", "b": 489.0}, {"a": "2024-12-07 07:20:00", "b": 494.25}, {"a": "2024-12-07 07:25:00", "b": 491.6}, {"a": "2024-12-07 07:30:00", "b": 504.25}, {"a": "2024-12-07 07:35:00", "b": 502.75}, {"a": "2024-12-07 07:40:00", "b": 490.5}, {"a": "2024-12-07 07:45:00", "b": 500.2}, {"a": "2024-12-07 07:50:00", "b": 511.25}, {"a": "2024-12-07 07:55:00", "b": 501.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    