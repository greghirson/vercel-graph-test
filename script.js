
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-03 15:00:00", "b": 407.5}, {"a": "2025-03-03 15:05:00", "b": 405.0}, {"a": "2025-03-03 15:10:00", "b": 405.0}, {"a": "2025-03-03 15:15:00", "b": 407.0}, {"a": "2025-03-03 15:20:00", "b": 406.5}, {"a": "2025-03-03 15:25:00", "b": 405.0}, {"a": "2025-03-03 15:30:00", "b": 404.5}, {"a": "2025-03-03 15:35:00", "b": 405.0}, {"a": "2025-03-03 15:40:00", "b": 404.0}, {"a": "2025-03-03 15:45:00", "b": 404.0}, {"a": "2025-03-03 15:50:00", "b": 406.5}, {"a": "2025-03-03 15:55:00", "b": 404.0}, {"a": "2025-03-03 16:00:00", "b": 403.6}, {"a": "2025-03-03 16:05:00", "b": 406.0}, {"a": "2025-03-03 16:10:00", "b": 404.5}, {"a": "2025-03-03 16:15:00", "b": 404.0}, {"a": "2025-03-03 16:20:00", "b": 407.75}, {"a": "2025-03-03 16:25:00", "b": 435.2}, {"a": "2025-03-03 16:30:00", "b": 443.2}, {"a": "2025-03-03 16:35:00", "b": 438.0}, {"a": "2025-03-03 16:40:00", "b": 439.25}, {"a": "2025-03-03 16:45:00", "b": 432.5}, {"a": "2025-03-03 16:50:00", "b": 431.3333333333333}, {"a": "2025-03-03 16:55:00", "b": 431.0}, {"a": "2025-03-03 17:00:00", "b": 422.8}, {"a": "2025-03-03 17:05:00", "b": 424.25}, {"a": "2025-03-03 17:10:00", "b": 432.2}, {"a": "2025-03-03 17:15:00", "b": 438.6666666666667}, {"a": "2025-03-03 17:20:00", "b": 446.8}, {"a": "2025-03-03 17:25:00", "b": 443.4}, {"a": "2025-03-03 17:30:00", "b": 432.6}, {"a": "2025-03-03 17:35:00", "b": 426.0}, {"a": "2025-03-03 17:40:00", "b": 421.75}, {"a": "2025-03-03 17:45:00", "b": 432.4}, {"a": "2025-03-03 17:50:00", "b": 443.0}, {"a": "2025-03-03 17:55:00", "b": 451.4}, {"a": "2025-03-03 18:00:00", "b": 455.75}, {"a": "2025-03-03 18:05:00", "b": 454.4}, {"a": "2025-03-03 18:10:00", "b": 456.75}, {"a": "2025-03-03 18:15:00", "b": 460.0}, {"a": "2025-03-03 18:20:00", "b": 463.0}, {"a": "2025-03-03 18:25:00", "b": 468.25}, {"a": "2025-03-03 18:30:00", "b": 473.4}, {"a": "2025-03-03 18:35:00", "b": 473.8}, {"a": "2025-03-03 18:40:00", "b": 464.4}, {"a": "2025-03-03 18:45:00", "b": 463.6}, {"a": "2025-03-03 18:50:00", "b": 484.8}, {"a": "2025-03-03 18:55:00", "b": 485.0}, {"a": "2025-03-03 19:00:00", "b": 480.2}, {"a": "2025-03-03 19:05:00", "b": 486.5}, {"a": "2025-03-03 19:10:00", "b": 514.4}, {"a": "2025-03-03 19:15:00", "b": 513.6666666666666}, {"a": "2025-03-03 19:20:00", "b": 506.8}, {"a": "2025-03-03 19:25:00", "b": 507.0}, {"a": "2025-03-03 19:30:00", "b": 510.6}, {"a": "2025-03-03 19:35:00", "b": 507.8}, {"a": "2025-03-03 19:40:00", "b": 508.4}, {"a": "2025-03-03 19:45:00", "b": 503.6}, {"a": "2025-03-03 19:50:00", "b": 499.0}, {"a": "2025-03-03 19:55:00", "b": 511.75}, {"a": "2025-03-03 20:00:00", "b": 512.5}, {"a": "2025-03-03 20:05:00", "b": 511.5}, {"a": "2025-03-03 20:10:00", "b": 532.4}, {"a": "2025-03-03 20:15:00", "b": 525.75}, {"a": "2025-03-03 20:20:00", "b": 520.8}, {"a": "2025-03-03 20:25:00", "b": 524.0}, {"a": "2025-03-03 20:30:00", "b": 528.75}, {"a": "2025-03-03 20:35:00", "b": 530.8}, {"a": "2025-03-03 20:40:00", "b": 542.5}, {"a": "2025-03-03 20:45:00", "b": 574.2}, {"a": "2025-03-03 20:50:00", "b": 579.8}, {"a": "2025-03-03 20:55:00", "b": 601.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    