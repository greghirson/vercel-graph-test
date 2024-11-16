
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-16 02:00:00", "b": 565.75}, {"a": "2024-11-16 02:05:00", "b": 559.6}, {"a": "2024-11-16 02:10:00", "b": 564.6}, {"a": "2024-11-16 02:15:00", "b": 558.4}, {"a": "2024-11-16 02:20:00", "b": 550.75}, {"a": "2024-11-16 02:25:00", "b": 561.8}, {"a": "2024-11-16 02:30:00", "b": 562.5}, {"a": "2024-11-16 02:35:00", "b": 546.3333333333334}, {"a": "2024-11-16 02:40:00", "b": 540.75}, {"a": "2024-11-16 02:45:00", "b": 548.6}, {"a": "2024-11-16 02:50:00", "b": 564.2}, {"a": "2024-11-16 02:55:00", "b": 566.2}, {"a": "2024-11-16 03:00:00", "b": 566.25}, {"a": "2024-11-16 03:05:00", "b": 567.5}, {"a": "2024-11-16 03:10:00", "b": 551.8}, {"a": "2024-11-16 03:15:00", "b": 552.4}, {"a": "2024-11-16 03:20:00", "b": 554.8}, {"a": "2024-11-16 03:25:00", "b": 568.6}, {"a": "2024-11-16 03:30:00", "b": 540.25}, {"a": "2024-11-16 03:35:00", "b": 546.2}, {"a": "2024-11-16 03:40:00", "b": 556.2}, {"a": "2024-11-16 03:45:00", "b": 542.4}, {"a": "2024-11-16 03:50:00", "b": 541.8}, {"a": "2024-11-16 03:55:00", "b": 538.0}, {"a": "2024-11-16 04:00:00", "b": 564.8}, {"a": "2024-11-16 04:05:00", "b": 552.4}, {"a": "2024-11-16 04:10:00", "b": 539.25}, {"a": "2024-11-16 04:15:00", "b": 540.0}, {"a": "2024-11-16 04:20:00", "b": 552.25}, {"a": "2024-11-16 04:25:00", "b": 543.0}, {"a": "2024-11-16 04:30:00", "b": 531.6}, {"a": "2024-11-16 04:35:00", "b": 531.4}, {"a": "2024-11-16 04:40:00", "b": 541.4}, {"a": "2024-11-16 04:45:00", "b": 523.25}, {"a": "2024-11-16 04:50:00", "b": 529.25}, {"a": "2024-11-16 04:55:00", "b": 544.25}, {"a": "2024-11-16 05:00:00", "b": 551.8}, {"a": "2024-11-16 05:05:00", "b": 533.4}, {"a": "2024-11-16 05:10:00", "b": 551.2}, {"a": "2024-11-16 05:15:00", "b": 547.6}, {"a": "2024-11-16 05:20:00", "b": 524.4}, {"a": "2024-11-16 05:25:00", "b": 516.4}, {"a": "2024-11-16 05:30:00", "b": 511.4}, {"a": "2024-11-16 05:35:00", "b": 503.3333333333333}, {"a": "2024-11-16 05:40:00", "b": 492.8}, {"a": "2024-11-16 05:45:00", "b": 499.25}, {"a": "2024-11-16 05:50:00", "b": 492.6}, {"a": "2024-11-16 05:55:00", "b": 485.0}, {"a": "2024-11-16 06:00:00", "b": 484.2}, {"a": "2024-11-16 06:05:00", "b": 478.2}, {"a": "2024-11-16 06:10:00", "b": 483.8}, {"a": "2024-11-16 06:15:00", "b": 487.4}, {"a": "2024-11-16 06:20:00", "b": 475.0}, {"a": "2024-11-16 06:25:00", "b": 466.0}, {"a": "2024-11-16 06:30:00", "b": 474.5}, {"a": "2024-11-16 06:35:00", "b": 486.2}, {"a": "2024-11-16 06:40:00", "b": 492.4}, {"a": "2024-11-16 06:45:00", "b": 498.25}, {"a": "2024-11-16 06:50:00", "b": 494.25}, {"a": "2024-11-16 06:55:00", "b": 487.8}, {"a": "2024-11-16 07:00:00", "b": 483.0}, {"a": "2024-11-16 07:05:00", "b": 462.6}, {"a": "2024-11-16 07:10:00", "b": 478.8}, {"a": "2024-11-16 07:15:00", "b": 500.75}, {"a": "2024-11-16 07:20:00", "b": 499.0}, {"a": "2024-11-16 07:25:00", "b": 504.8}, {"a": "2024-11-16 07:30:00", "b": 499.0}, {"a": "2024-11-16 07:35:00", "b": 494.75}, {"a": "2024-11-16 07:40:00", "b": 523.25}, {"a": "2024-11-16 07:45:00", "b": 522.3333333333334}, {"a": "2024-11-16 07:50:00", "b": 517.5}, {"a": "2024-11-16 07:55:00", "b": 520.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    