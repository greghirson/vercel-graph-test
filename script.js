
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-24 17:30:00", "b": 426.3333333333333}, {"a": "2024-10-24 17:35:00", "b": 430.2}, {"a": "2024-10-24 17:40:00", "b": 444.0}, {"a": "2024-10-24 17:45:00", "b": 458.0}, {"a": "2024-10-24 17:50:00", "b": 477.6}, {"a": "2024-10-24 17:55:00", "b": 502.6}, {"a": "2024-10-24 18:00:00", "b": 506.8}, {"a": "2024-10-24 18:05:00", "b": 521.2}, {"a": "2024-10-24 18:10:00", "b": 524.4}, {"a": "2024-10-24 18:15:00", "b": 520.6}, {"a": "2024-10-24 18:20:00", "b": 527.0}, {"a": "2024-10-24 18:25:00", "b": 538.6}, {"a": "2024-10-24 18:30:00", "b": 533.8}, {"a": "2024-10-24 18:35:00", "b": 541.8}, {"a": "2024-10-24 18:40:00", "b": 533.0}, {"a": "2024-10-24 18:45:00", "b": 527.6}, {"a": "2024-10-24 18:50:00", "b": 518.25}, {"a": "2024-10-24 18:55:00", "b": 503.0}, {"a": "2024-10-24 19:00:00", "b": 508.2}, {"a": "2024-10-24 19:05:00", "b": 512.4}, {"a": "2024-10-24 19:10:00", "b": 513.6666666666666}, {"a": "2024-10-24 19:15:00", "b": 523.6666666666666}, {"a": "2024-10-24 19:20:00", "b": 530.75}, {"a": "2024-10-24 19:25:00", "b": 528.0}, {"a": "2024-10-24 19:30:00", "b": 538.8}, {"a": "2024-10-24 19:35:00", "b": 534.4}, {"a": "2024-10-24 19:40:00", "b": 525.25}, {"a": "2024-10-24 19:45:00", "b": 541.8}, {"a": "2024-10-24 19:50:00", "b": 536.75}, {"a": "2024-10-24 19:55:00", "b": 552.8}, {"a": "2024-10-24 20:00:00", "b": 553.0}, {"a": "2024-10-24 20:05:00", "b": 545.5}, {"a": "2024-10-24 20:10:00", "b": 527.2}, {"a": "2024-10-24 20:15:00", "b": 507.8}, {"a": "2024-10-24 20:20:00", "b": 462.6}, {"a": "2024-10-24 20:25:00", "b": 448.8}, {"a": "2024-10-24 20:30:00", "b": 461.6}, {"a": "2024-10-24 20:35:00", "b": 486.5}, {"a": "2024-10-24 20:40:00", "b": 471.2}, {"a": "2024-10-24 20:45:00", "b": 465.25}, {"a": "2024-10-24 20:50:00", "b": 493.2}, {"a": "2024-10-24 20:55:00", "b": 517.5}, {"a": "2024-10-24 21:00:00", "b": 490.6}, {"a": "2024-10-24 21:05:00", "b": 460.2}, {"a": "2024-10-24 21:10:00", "b": 450.0}, {"a": "2024-10-24 21:15:00", "b": 448.5}, {"a": "2024-10-24 21:20:00", "b": 444.3333333333333}, {"a": "2024-10-24 21:25:00", "b": 476.2}, {"a": "2024-10-24 21:30:00", "b": 492.0}, {"a": "2024-10-24 21:35:00", "b": 463.6}, {"a": "2024-10-24 21:40:00", "b": 458.8}, {"a": "2024-10-24 21:45:00", "b": 463.5}, {"a": "2024-10-24 21:50:00", "b": 453.4}, {"a": "2024-10-24 21:55:00", "b": 457.0}, {"a": "2024-10-24 22:00:00", "b": 461.6}, {"a": "2024-10-24 22:05:00", "b": 471.8}, {"a": "2024-10-24 22:10:00", "b": 483.5}, {"a": "2024-10-24 22:15:00", "b": 482.5}, {"a": "2024-10-24 22:20:00", "b": 476.4}, {"a": "2024-10-24 22:25:00", "b": 476.2}, {"a": "2024-10-24 22:30:00", "b": 498.8}, {"a": "2024-10-24 22:35:00", "b": 493.2}, {"a": "2024-10-24 22:40:00", "b": 492.25}, {"a": "2024-10-24 22:45:00", "b": 497.5}, {"a": "2024-10-24 22:50:00", "b": 487.0}, {"a": "2024-10-24 22:55:00", "b": 489.0}, {"a": "2024-10-24 23:00:00", "b": 493.25}, {"a": "2024-10-24 23:05:00", "b": 493.0}, {"a": "2024-10-24 23:10:00", "b": 518.75}, {"a": "2024-10-24 23:15:00", "b": 502.4}, {"a": "2024-10-24 23:20:00", "b": 495.2}, {"a": "2024-10-24 23:25:00", "b": 507.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    