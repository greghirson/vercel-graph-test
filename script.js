
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-12 00:00:00", "b": 493.4}, {"a": "2025-03-12 00:05:00", "b": 495.75}, {"a": "2025-03-12 00:10:00", "b": 502.0}, {"a": "2025-03-12 00:15:00", "b": 493.0}, {"a": "2025-03-12 00:20:00", "b": 494.6}, {"a": "2025-03-12 00:25:00", "b": 497.0}, {"a": "2025-03-12 00:30:00", "b": 492.6666666666667}, {"a": "2025-03-12 00:35:00", "b": 488.0}, {"a": "2025-03-12 00:40:00", "b": 501.75}, {"a": "2025-03-12 00:45:00", "b": 512.3333333333334}, {"a": "2025-03-12 00:50:00", "b": 514.2}, {"a": "2025-03-12 00:55:00", "b": 492.6}, {"a": "2025-03-12 01:00:00", "b": 472.4}, {"a": "2025-03-12 01:05:00", "b": 458.5}, {"a": "2025-03-12 01:10:00", "b": 452.4}, {"a": "2025-03-12 01:15:00", "b": 455.25}, {"a": "2025-03-12 01:20:00", "b": 462.0}, {"a": "2025-03-12 01:25:00", "b": 484.25}, {"a": "2025-03-12 01:30:00", "b": 483.0}, {"a": "2025-03-12 01:35:00", "b": 479.6}, {"a": "2025-03-12 01:40:00", "b": 470.8}, {"a": "2025-03-12 01:45:00", "b": 470.2}, {"a": "2025-03-12 01:50:00", "b": 472.8}, {"a": "2025-03-12 01:55:00", "b": 474.0}, {"a": "2025-03-12 02:00:00", "b": 450.4}, {"a": "2025-03-12 02:05:00", "b": 454.6}, {"a": "2025-03-12 02:10:00", "b": 454.75}, {"a": "2025-03-12 02:15:00", "b": 448.0}, {"a": "2025-03-12 02:20:00", "b": 453.2}, {"a": "2025-03-12 02:25:00", "b": 428.0}, {"a": "2025-03-12 02:30:00", "b": 425.4}, {"a": "2025-03-12 02:35:00", "b": 427.3333333333333}, {"a": "2025-03-12 02:40:00", "b": 432.8}, {"a": "2025-03-12 02:45:00", "b": 425.0}, {"a": "2025-03-12 02:50:00", "b": 433.4}, {"a": "2025-03-12 02:55:00", "b": 445.4}, {"a": "2025-03-12 03:00:00", "b": 439.0}, {"a": "2025-03-12 03:05:00", "b": 431.6}, {"a": "2025-03-12 03:10:00", "b": 435.6}, {"a": "2025-03-12 03:15:00", "b": 430.75}, {"a": "2025-03-12 03:20:00", "b": 427.6}, {"a": "2025-03-12 03:25:00", "b": 420.5}, {"a": "2025-03-12 03:30:00", "b": 417.0}, {"a": "2025-03-12 03:35:00", "b": 411.25}, {"a": "2025-03-12 03:40:00", "b": 408.5}, {"a": "2025-03-12 03:45:00", "b": 416.4}, {"a": "2025-03-12 03:50:00", "b": 411.4}, {"a": "2025-03-12 03:55:00", "b": 409.6666666666667}, {"a": "2025-03-12 04:00:00", "b": 408.0}, {"a": "2025-03-12 04:05:00", "b": 417.75}, {"a": "2025-03-12 04:10:00", "b": 418.2}, {"a": "2025-03-12 04:15:00", "b": 408.6666666666667}, {"a": "2025-03-12 04:20:00", "b": 411.75}, {"a": "2025-03-12 04:25:00", "b": 420.0}, {"a": "2025-03-12 04:30:00", "b": 413.6}, {"a": "2025-03-12 04:35:00", "b": 408.25}, {"a": "2025-03-12 04:40:00", "b": 405.25}, {"a": "2025-03-12 04:45:00", "b": 405.0}, {"a": "2025-03-12 04:50:00", "b": 403.8}, {"a": "2025-03-12 04:55:00", "b": 405.5}, {"a": "2025-03-12 05:00:00", "b": 406.0}, {"a": "2025-03-12 05:05:00", "b": 404.3333333333333}, {"a": "2025-03-12 05:10:00", "b": 402.5}, {"a": "2025-03-12 05:15:00", "b": 406.3333333333333}, {"a": "2025-03-12 05:20:00", "b": 404.5}, {"a": "2025-03-12 05:25:00", "b": 405.6666666666667}, {"a": "2025-03-12 05:30:00", "b": 408.0}, {"a": "2025-03-12 05:35:00", "b": 408.0}, {"a": "2025-03-12 05:40:00", "b": 406.0}, {"a": "2025-03-12 05:45:00", "b": 406.5}, {"a": "2025-03-12 05:50:00", "b": 403.0}, {"a": "2025-03-12 05:55:00", "b": 403.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    