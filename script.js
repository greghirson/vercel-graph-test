
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-31 04:10:00", "b": 405.6666666666667}, {"a": "2024-10-31 04:15:00", "b": 405.5}, {"a": "2024-10-31 04:20:00", "b": 407.0}, {"a": "2024-10-31 04:25:00", "b": 403.75}, {"a": "2024-10-31 04:30:00", "b": 404.8}, {"a": "2024-10-31 04:35:00", "b": 406.0}, {"a": "2024-10-31 04:40:00", "b": 404.0}, {"a": "2024-10-31 04:45:00", "b": 404.5}, {"a": "2024-10-31 04:50:00", "b": 405.0}, {"a": "2024-10-31 04:55:00", "b": 405.0}, {"a": "2024-10-31 05:00:00", "b": 405.5}, {"a": "2024-10-31 05:05:00", "b": 404.6}, {"a": "2024-10-31 05:10:00", "b": 405.0}, {"a": "2024-10-31 05:15:00", "b": 402.5}, {"a": "2024-10-31 05:20:00", "b": 403.5}, {"a": "2024-10-31 05:25:00", "b": 404.5}, {"a": "2024-10-31 05:30:00", "b": 403.5}, {"a": "2024-10-31 05:35:00", "b": 402.6666666666667}, {"a": "2024-10-31 05:40:00", "b": 403.0}, {"a": "2024-10-31 05:45:00", "b": 402.5}, {"a": "2024-10-31 05:50:00", "b": 401.0}, {"a": "2024-10-31 05:55:00", "b": 403.5}, {"a": "2024-10-31 06:00:00", "b": 402.5}, {"a": "2024-10-31 06:05:00", "b": 404.0}, {"a": "2024-10-31 06:10:00", "b": 404.75}, {"a": "2024-10-31 06:15:00", "b": 404.2}, {"a": "2024-10-31 06:20:00", "b": 401.75}, {"a": "2024-10-31 06:25:00", "b": 403.75}, {"a": "2024-10-31 06:30:00", "b": 411.0}, {"a": "2024-10-31 06:35:00", "b": 432.0}, {"a": "2024-10-31 06:40:00", "b": 454.8}, {"a": "2024-10-31 06:45:00", "b": 462.75}, {"a": "2024-10-31 06:50:00", "b": 484.0}, {"a": "2024-10-31 06:55:00", "b": 494.5}, {"a": "2024-10-31 07:00:00", "b": 503.0}, {"a": "2024-10-31 07:05:00", "b": 511.6}, {"a": "2024-10-31 07:10:00", "b": 517.0}, {"a": "2024-10-31 07:15:00", "b": 523.0}, {"a": "2024-10-31 07:20:00", "b": 521.4}, {"a": "2024-10-31 07:25:00", "b": 512.5}, {"a": "2024-10-31 07:30:00", "b": 516.0}, {"a": "2024-10-31 07:35:00", "b": 515.0}, {"a": "2024-10-31 07:40:00", "b": 528.2}, {"a": "2024-10-31 07:45:00", "b": 558.6}, {"a": "2024-10-31 07:50:00", "b": 563.8}, {"a": "2024-10-31 07:55:00", "b": 569.8}, {"a": "2024-10-31 08:00:00", "b": 585.4}, {"a": "2024-10-31 08:05:00", "b": 590.8}, {"a": "2024-10-31 08:10:00", "b": 598.0}, {"a": "2024-10-31 08:15:00", "b": 594.0}, {"a": "2024-10-31 08:20:00", "b": 591.0}, {"a": "2024-10-31 08:25:00", "b": 587.2}, {"a": "2024-10-31 08:30:00", "b": 576.25}, {"a": "2024-10-31 08:35:00", "b": 585.3333333333334}, {"a": "2024-10-31 08:40:00", "b": 577.6}, {"a": "2024-10-31 08:45:00", "b": 566.0}, {"a": "2024-10-31 08:50:00", "b": 575.4}, {"a": "2024-10-31 08:55:00", "b": 571.8}, {"a": "2024-10-31 09:00:00", "b": 553.75}, {"a": "2024-10-31 09:05:00", "b": 541.25}, {"a": "2024-10-31 09:10:00", "b": 549.0}, {"a": "2024-10-31 09:15:00", "b": 554.5}, {"a": "2024-10-31 09:20:00", "b": 543.2}, {"a": "2024-10-31 09:25:00", "b": 532.0}, {"a": "2024-10-31 09:30:00", "b": 533.2}, {"a": "2024-10-31 09:35:00", "b": 537.75}, {"a": "2024-10-31 09:40:00", "b": 532.4}, {"a": "2024-10-31 09:45:00", "b": 518.2}, {"a": "2024-10-31 09:50:00", "b": 524.6}, {"a": "2024-10-31 09:55:00", "b": 528.4}, {"a": "2024-10-31 10:00:00", "b": 521.4}, {"a": "2024-10-31 10:05:00", "b": 506.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    