
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-30 09:00:00", "b": 585.6666666666666}, {"a": "2025-01-30 09:05:00", "b": 571.4}, {"a": "2025-01-30 09:10:00", "b": 569.75}, {"a": "2025-01-30 09:15:00", "b": 575.0}, {"a": "2025-01-30 09:20:00", "b": 568.25}, {"a": "2025-01-30 09:25:00", "b": 568.75}, {"a": "2025-01-30 09:30:00", "b": 562.3333333333334}, {"a": "2025-01-30 09:35:00", "b": 567.75}, {"a": "2025-01-30 09:40:00", "b": 555.5}, {"a": "2025-01-30 09:45:00", "b": 554.0}, {"a": "2025-01-30 09:50:00", "b": 551.25}, {"a": "2025-01-30 09:55:00", "b": 548.4}, {"a": "2025-01-30 10:00:00", "b": 542.2}, {"a": "2025-01-30 10:05:00", "b": 553.2}, {"a": "2025-01-30 10:10:00", "b": 554.25}, {"a": "2025-01-30 10:15:00", "b": 539.4}, {"a": "2025-01-30 10:20:00", "b": 527.6}, {"a": "2025-01-30 10:25:00", "b": 517.0}, {"a": "2025-01-30 10:30:00", "b": 528.8}, {"a": "2025-01-30 10:35:00", "b": 528.75}, {"a": "2025-01-30 10:40:00", "b": 514.5}, {"a": "2025-01-30 10:45:00", "b": 513.75}, {"a": "2025-01-30 10:50:00", "b": 514.0}, {"a": "2025-01-30 10:55:00", "b": 507.5}, {"a": "2025-01-30 11:00:00", "b": 504.75}, {"a": "2025-01-30 11:05:00", "b": 507.0}, {"a": "2025-01-30 11:10:00", "b": 516.5}, {"a": "2025-01-30 11:15:00", "b": 509.0}, {"a": "2025-01-30 11:20:00", "b": 494.5}, {"a": "2025-01-30 11:25:00", "b": 484.2}, {"a": "2025-01-30 11:30:00", "b": 484.0}, {"a": "2025-01-30 11:35:00", "b": 490.5}, {"a": "2025-01-30 11:40:00", "b": 491.25}, {"a": "2025-01-30 11:45:00", "b": 486.0}, {"a": "2025-01-30 11:50:00", "b": 486.6}, {"a": "2025-01-30 11:55:00", "b": 484.0}, {"a": "2025-01-30 12:00:00", "b": 494.0}, {"a": "2025-01-30 12:05:00", "b": 482.0}, {"a": "2025-01-30 12:10:00", "b": 476.2}, {"a": "2025-01-30 12:15:00", "b": 486.5}, {"a": "2025-01-30 12:20:00", "b": 493.6}, {"a": "2025-01-30 12:25:00", "b": 487.6}, {"a": "2025-01-30 12:30:00", "b": 488.75}, {"a": "2025-01-30 12:35:00", "b": 502.6}, {"a": "2025-01-30 12:40:00", "b": 517.25}, {"a": "2025-01-30 12:45:00", "b": 516.8}, {"a": "2025-01-30 12:50:00", "b": 506.4}, {"a": "2025-01-30 12:55:00", "b": 516.75}, {"a": "2025-01-30 13:00:00", "b": 518.0}, {"a": "2025-01-30 13:05:00", "b": 518.2}, {"a": "2025-01-30 13:10:00", "b": 514.8}, {"a": "2025-01-30 13:15:00", "b": 518.0}, {"a": "2025-01-30 13:20:00", "b": 539.8}, {"a": "2025-01-30 13:25:00", "b": 542.8}, {"a": "2025-01-30 13:30:00", "b": 551.8}, {"a": "2025-01-30 13:35:00", "b": 553.8}, {"a": "2025-01-30 13:40:00", "b": 546.75}, {"a": "2025-01-30 13:45:00", "b": 556.0}, {"a": "2025-01-30 13:50:00", "b": 560.6}, {"a": "2025-01-30 13:55:00", "b": 577.0}, {"a": "2025-01-30 14:00:00", "b": 582.4}, {"a": "2025-01-30 14:05:00", "b": 566.8}, {"a": "2025-01-30 14:10:00", "b": 566.5}, {"a": "2025-01-30 14:15:00", "b": 569.75}, {"a": "2025-01-30 14:20:00", "b": 583.2}, {"a": "2025-01-30 14:25:00", "b": 609.0}, {"a": "2025-01-30 14:30:00", "b": 598.4}, {"a": "2025-01-30 14:35:00", "b": 584.0}, {"a": "2025-01-30 14:40:00", "b": 585.2}, {"a": "2025-01-30 14:45:00", "b": 579.2}, {"a": "2025-01-30 14:50:00", "b": 572.0}, {"a": "2025-01-30 14:55:00", "b": 560.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    