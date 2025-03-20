
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-20 05:00:00", "b": 537.25}, {"a": "2025-03-20 05:05:00", "b": 534.5}, {"a": "2025-03-20 05:10:00", "b": 546.5}, {"a": "2025-03-20 05:15:00", "b": 532.6}, {"a": "2025-03-20 05:20:00", "b": 521.6}, {"a": "2025-03-20 05:25:00", "b": 520.2}, {"a": "2025-03-20 05:30:00", "b": 511.2}, {"a": "2025-03-20 05:35:00", "b": 517.2}, {"a": "2025-03-20 05:40:00", "b": 517.8}, {"a": "2025-03-20 05:45:00", "b": 492.6}, {"a": "2025-03-20 05:50:00", "b": 490.8}, {"a": "2025-03-20 05:55:00", "b": 501.75}, {"a": "2025-03-20 06:00:00", "b": 522.8}, {"a": "2025-03-20 06:05:00", "b": 524.6}, {"a": "2025-03-20 06:10:00", "b": 516.6}, {"a": "2025-03-20 06:15:00", "b": 490.0}, {"a": "2025-03-20 06:20:00", "b": 498.25}, {"a": "2025-03-20 06:25:00", "b": 510.2}, {"a": "2025-03-20 06:30:00", "b": 506.5}, {"a": "2025-03-20 06:35:00", "b": 514.8}, {"a": "2025-03-20 06:40:00", "b": 508.0}, {"a": "2025-03-20 06:45:00", "b": 506.2}, {"a": "2025-03-20 06:50:00", "b": 513.8}, {"a": "2025-03-20 06:55:00", "b": 508.8}, {"a": "2025-03-20 07:00:00", "b": 500.2}, {"a": "2025-03-20 07:05:00", "b": 509.8}, {"a": "2025-03-20 07:10:00", "b": 507.5}, {"a": "2025-03-20 07:15:00", "b": 501.2}, {"a": "2025-03-20 07:20:00", "b": 503.4}, {"a": "2025-03-20 07:25:00", "b": 511.75}, {"a": "2025-03-20 07:30:00", "b": 515.0}, {"a": "2025-03-20 07:35:00", "b": 537.0}, {"a": "2025-03-20 07:40:00", "b": 527.4}, {"a": "2025-03-20 07:45:00", "b": 523.5}, {"a": "2025-03-20 07:50:00", "b": 523.0}, {"a": "2025-03-20 07:55:00", "b": 522.6}, {"a": "2025-03-20 08:00:00", "b": 517.2}, {"a": "2025-03-20 08:05:00", "b": 516.4}, {"a": "2025-03-20 08:10:00", "b": 521.0}, {"a": "2025-03-20 08:15:00", "b": 522.0}, {"a": "2025-03-20 08:20:00", "b": 518.5}, {"a": "2025-03-20 08:25:00", "b": 517.0}, {"a": "2025-03-20 08:30:00", "b": 524.0}, {"a": "2025-03-20 08:35:00", "b": 503.5}, {"a": "2025-03-20 08:40:00", "b": 509.0}, {"a": "2025-03-20 08:45:00", "b": 511.4}, {"a": "2025-03-20 08:50:00", "b": 505.0}, {"a": "2025-03-20 08:55:00", "b": 505.4}, {"a": "2025-03-20 09:00:00", "b": 517.8}, {"a": "2025-03-20 09:05:00", "b": 520.8}, {"a": "2025-03-20 09:10:00", "b": 517.0}, {"a": "2025-03-20 09:15:00", "b": 502.2}, {"a": "2025-03-20 09:20:00", "b": 505.25}, {"a": "2025-03-20 09:25:00", "b": 530.4}, {"a": "2025-03-20 09:30:00", "b": 521.8}, {"a": "2025-03-20 09:35:00", "b": 482.8}, {"a": "2025-03-20 09:40:00", "b": 473.75}, {"a": "2025-03-20 09:45:00", "b": 487.8}, {"a": "2025-03-20 09:50:00", "b": 504.0}, {"a": "2025-03-20 09:55:00", "b": 494.6}, {"a": "2025-03-20 10:00:00", "b": 482.8}, {"a": "2025-03-20 10:05:00", "b": 484.0}, {"a": "2025-03-20 10:10:00", "b": 493.2}, {"a": "2025-03-20 10:15:00", "b": 495.2}, {"a": "2025-03-20 10:20:00", "b": 481.8}, {"a": "2025-03-20 10:25:00", "b": 478.75}, {"a": "2025-03-20 10:30:00", "b": 475.25}, {"a": "2025-03-20 10:35:00", "b": 461.0}, {"a": "2025-03-20 10:40:00", "b": 466.8}, {"a": "2025-03-20 10:45:00", "b": 450.5}, {"a": "2025-03-20 10:50:00", "b": 434.75}, {"a": "2025-03-20 10:55:00", "b": 464.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    