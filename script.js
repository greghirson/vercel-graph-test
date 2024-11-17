
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-16 14:00:00", "b": 516.3333333333334}, {"a": "2024-11-16 14:05:00", "b": 507.8}, {"a": "2024-11-16 14:10:00", "b": 502.8}, {"a": "2024-11-16 14:15:00", "b": 515.0}, {"a": "2024-11-16 14:20:00", "b": 514.0}, {"a": "2024-11-16 14:25:00", "b": 497.6}, {"a": "2024-11-16 14:30:00", "b": 496.2}, {"a": "2024-11-16 14:35:00", "b": 499.0}, {"a": "2024-11-16 14:40:00", "b": 497.8}, {"a": "2024-11-16 14:45:00", "b": 500.2}, {"a": "2024-11-16 14:50:00", "b": 497.25}, {"a": "2024-11-16 14:55:00", "b": 492.4}, {"a": "2024-11-16 15:00:00", "b": 488.8}, {"a": "2024-11-16 15:05:00", "b": 484.75}, {"a": "2024-11-16 15:10:00", "b": 498.0}, {"a": "2024-11-16 15:15:00", "b": 496.5}, {"a": "2024-11-16 15:20:00", "b": 483.6}, {"a": "2024-11-16 15:25:00", "b": 474.25}, {"a": "2024-11-16 15:30:00", "b": 474.6}, {"a": "2024-11-16 15:35:00", "b": 484.2}, {"a": "2024-11-16 15:40:00", "b": 484.5}, {"a": "2024-11-16 15:45:00", "b": 495.75}, {"a": "2024-11-16 15:50:00", "b": 491.4}, {"a": "2024-11-16 15:55:00", "b": 484.2}, {"a": "2024-11-16 16:00:00", "b": 482.6666666666667}, {"a": "2024-11-16 16:05:00", "b": 470.75}, {"a": "2024-11-16 16:10:00", "b": 475.75}, {"a": "2024-11-16 16:15:00", "b": 475.0}, {"a": "2024-11-16 16:20:00", "b": 473.0}, {"a": "2024-11-16 16:25:00", "b": 467.25}, {"a": "2024-11-16 16:30:00", "b": 471.6}, {"a": "2024-11-16 16:35:00", "b": 475.8}, {"a": "2024-11-16 16:40:00", "b": 483.8}, {"a": "2024-11-16 16:45:00", "b": 470.8}, {"a": "2024-11-16 16:50:00", "b": 476.75}, {"a": "2024-11-16 16:55:00", "b": 466.25}, {"a": "2024-11-16 17:00:00", "b": 487.6}, {"a": "2024-11-16 17:05:00", "b": 493.25}, {"a": "2024-11-16 17:10:00", "b": 492.2}, {"a": "2024-11-16 17:15:00", "b": 501.6}, {"a": "2024-11-16 17:20:00", "b": 500.5}, {"a": "2024-11-16 17:25:00", "b": 488.25}, {"a": "2024-11-16 17:30:00", "b": 486.75}, {"a": "2024-11-16 17:35:00", "b": 482.6}, {"a": "2024-11-16 17:40:00", "b": 475.2}, {"a": "2024-11-16 17:45:00", "b": 482.8}, {"a": "2024-11-16 17:50:00", "b": 482.2}, {"a": "2024-11-16 17:55:00", "b": 471.5}, {"a": "2024-11-16 18:00:00", "b": 481.5}, {"a": "2024-11-16 18:05:00", "b": 478.6666666666667}, {"a": "2024-11-16 18:10:00", "b": 480.6}, {"a": "2024-11-16 18:15:00", "b": 500.4}, {"a": "2024-11-16 18:20:00", "b": 506.8}, {"a": "2024-11-16 18:25:00", "b": 500.0}, {"a": "2024-11-16 18:30:00", "b": 503.6}, {"a": "2024-11-16 18:35:00", "b": 464.2}, {"a": "2024-11-16 18:40:00", "b": 465.2}, {"a": "2024-11-16 18:45:00", "b": 486.4}, {"a": "2024-11-16 18:50:00", "b": 473.6}, {"a": "2024-11-16 18:55:00", "b": 476.2}, {"a": "2024-11-16 19:00:00", "b": 490.2}, {"a": "2024-11-16 19:05:00", "b": 478.0}, {"a": "2024-11-16 19:10:00", "b": 484.6666666666667}, {"a": "2024-11-16 19:15:00", "b": 503.0}, {"a": "2024-11-16 19:20:00", "b": 503.5}, {"a": "2024-11-16 19:25:00", "b": 507.4}, {"a": "2024-11-16 19:30:00", "b": 512.25}, {"a": "2024-11-16 19:35:00", "b": 541.2}, {"a": "2024-11-16 19:40:00", "b": 552.25}, {"a": "2024-11-16 19:45:00", "b": 566.75}, {"a": "2024-11-16 19:50:00", "b": 562.4}, {"a": "2024-11-16 19:55:00", "b": 566.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    