
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-12 01:00:00", "b": 538.3333333333334}, {"a": "2025-01-12 01:05:00", "b": 522.6}, {"a": "2025-01-12 01:10:00", "b": 519.0}, {"a": "2025-01-12 01:15:00", "b": 521.25}, {"a": "2025-01-12 01:20:00", "b": 512.0}, {"a": "2025-01-12 01:25:00", "b": 525.25}, {"a": "2025-01-12 01:30:00", "b": 507.5}, {"a": "2025-01-12 01:35:00", "b": 488.4}, {"a": "2025-01-12 01:40:00", "b": 453.6}, {"a": "2025-01-12 01:45:00", "b": 441.5}, {"a": "2025-01-12 01:50:00", "b": 452.6}, {"a": "2025-01-12 01:55:00", "b": 446.75}, {"a": "2025-01-12 02:00:00", "b": 438.4}, {"a": "2025-01-12 02:05:00", "b": 447.0}, {"a": "2025-01-12 02:10:00", "b": 437.8}, {"a": "2025-01-12 02:15:00", "b": 434.0}, {"a": "2025-01-12 02:20:00", "b": 432.2}, {"a": "2025-01-12 02:25:00", "b": 438.8}, {"a": "2025-01-12 02:30:00", "b": 436.4}, {"a": "2025-01-12 02:35:00", "b": 429.25}, {"a": "2025-01-12 02:40:00", "b": 432.6666666666667}, {"a": "2025-01-12 02:45:00", "b": 428.5}, {"a": "2025-01-12 02:50:00", "b": 424.75}, {"a": "2025-01-12 02:55:00", "b": 425.5}, {"a": "2025-01-12 03:05:00", "b": 435.5}, {"a": "2025-01-12 03:10:00", "b": 422.8}, {"a": "2025-01-12 03:15:00", "b": 418.5}, {"a": "2025-01-12 03:20:00", "b": 406.0}, {"a": "2025-01-12 03:25:00", "b": 407.0}, {"a": "2025-01-12 03:30:00", "b": 404.6666666666667}, {"a": "2025-01-12 03:35:00", "b": 406.0}, {"a": "2025-01-12 03:40:00", "b": 405.5}, {"a": "2025-01-12 03:45:00", "b": 405.3333333333333}, {"a": "2025-01-12 03:50:00", "b": 404.0}, {"a": "2025-01-12 04:00:00", "b": 403.3333333333333}, {"a": "2025-01-12 04:05:00", "b": 401.6666666666667}, {"a": "2025-01-12 04:10:00", "b": 403.5}, {"a": "2025-01-12 04:15:00", "b": 402.8}, {"a": "2025-01-12 04:20:00", "b": 402.5}, {"a": "2025-01-12 04:25:00", "b": 401.2}, {"a": "2025-01-12 04:30:00", "b": 401.6666666666667}, {"a": "2025-01-12 04:35:00", "b": 402.8}, {"a": "2025-01-12 04:40:00", "b": 401.25}, {"a": "2025-01-12 04:45:00", "b": 401.75}, {"a": "2025-01-12 04:50:00", "b": 402.0}, {"a": "2025-01-12 04:55:00", "b": 402.4}, {"a": "2025-01-12 05:00:00", "b": 404.0}, {"a": "2025-01-12 05:05:00", "b": 402.2}, {"a": "2025-01-12 05:10:00", "b": 402.4}, {"a": "2025-01-12 05:15:00", "b": 401.6}, {"a": "2025-01-12 05:20:00", "b": 402.3333333333333}, {"a": "2025-01-12 05:25:00", "b": 402.0}, {"a": "2025-01-12 05:30:00", "b": 403.2}, {"a": "2025-01-12 05:35:00", "b": 402.3333333333333}, {"a": "2025-01-12 05:40:00", "b": 401.8}, {"a": "2025-01-12 05:45:00", "b": 402.0}, {"a": "2025-01-12 05:50:00", "b": 401.6666666666667}, {"a": "2025-01-12 05:55:00", "b": 402.6}, {"a": "2025-01-12 06:00:00", "b": 401.0}, {"a": "2025-01-12 06:05:00", "b": 402.25}, {"a": "2025-01-12 06:10:00", "b": 402.2}, {"a": "2025-01-12 06:15:00", "b": 401.6}, {"a": "2025-01-12 06:20:00", "b": 401.4}, {"a": "2025-01-12 06:25:00", "b": 402.0}, {"a": "2025-01-12 06:30:00", "b": 402.4}, {"a": "2025-01-12 06:35:00", "b": 401.2}, {"a": "2025-01-12 06:40:00", "b": 401.6666666666667}, {"a": "2025-01-12 06:45:00", "b": 401.75}, {"a": "2025-01-12 06:50:00", "b": 402.5}, {"a": "2025-01-12 06:55:00", "b": 401.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    