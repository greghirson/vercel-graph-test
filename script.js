
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-22 10:00:00", "b": 561.5}, {"a": "2025-01-22 10:05:00", "b": 557.25}, {"a": "2025-01-22 10:10:00", "b": 555.4}, {"a": "2025-01-22 10:15:00", "b": 546.0}, {"a": "2025-01-22 10:20:00", "b": 545.0}, {"a": "2025-01-22 10:25:00", "b": 538.6}, {"a": "2025-01-22 10:30:00", "b": 542.25}, {"a": "2025-01-22 10:35:00", "b": 547.5}, {"a": "2025-01-22 10:40:00", "b": 536.0}, {"a": "2025-01-22 10:45:00", "b": 514.8}, {"a": "2025-01-22 10:50:00", "b": 507.8}, {"a": "2025-01-22 10:55:00", "b": 509.4}, {"a": "2025-01-22 11:00:00", "b": 517.0}, {"a": "2025-01-22 11:05:00", "b": 523.0}, {"a": "2025-01-22 11:10:00", "b": 516.25}, {"a": "2025-01-22 11:15:00", "b": 509.0}, {"a": "2025-01-22 11:20:00", "b": 510.6666666666667}, {"a": "2025-01-22 11:25:00", "b": 513.75}, {"a": "2025-01-22 11:30:00", "b": 511.4}, {"a": "2025-01-22 11:35:00", "b": 506.0}, {"a": "2025-01-22 11:40:00", "b": 499.0}, {"a": "2025-01-22 11:45:00", "b": 497.0}, {"a": "2025-01-22 11:50:00", "b": 487.6}, {"a": "2025-01-22 11:55:00", "b": 489.8}, {"a": "2025-01-22 12:00:00", "b": 474.8}, {"a": "2025-01-22 12:05:00", "b": 475.2}, {"a": "2025-01-22 12:10:00", "b": 485.2}, {"a": "2025-01-22 12:15:00", "b": 471.4}, {"a": "2025-01-22 12:20:00", "b": 464.0}, {"a": "2025-01-22 12:25:00", "b": 471.0}, {"a": "2025-01-22 12:30:00", "b": 465.4}, {"a": "2025-01-22 12:35:00", "b": 467.75}, {"a": "2025-01-22 12:40:00", "b": 473.2}, {"a": "2025-01-22 12:45:00", "b": 460.6}, {"a": "2025-01-22 12:50:00", "b": 457.5}, {"a": "2025-01-22 12:55:00", "b": 461.25}, {"a": "2025-01-22 13:00:00", "b": 462.0}, {"a": "2025-01-22 13:05:00", "b": 457.8}, {"a": "2025-01-22 13:10:00", "b": 451.6}, {"a": "2025-01-22 13:15:00", "b": 447.6}, {"a": "2025-01-22 13:20:00", "b": 453.2}, {"a": "2025-01-22 13:25:00", "b": 456.6666666666667}, {"a": "2025-01-22 13:30:00", "b": 467.4}, {"a": "2025-01-22 13:35:00", "b": 468.0}, {"a": "2025-01-22 13:40:00", "b": 454.75}, {"a": "2025-01-22 13:45:00", "b": 456.2}, {"a": "2025-01-22 13:50:00", "b": 449.6}, {"a": "2025-01-22 13:55:00", "b": 440.0}, {"a": "2025-01-22 14:00:00", "b": 439.8}, {"a": "2025-01-22 14:05:00", "b": 443.0}, {"a": "2025-01-22 14:10:00", "b": 439.5}, {"a": "2025-01-22 14:15:00", "b": 430.4}, {"a": "2025-01-22 14:20:00", "b": 425.8}, {"a": "2025-01-22 14:25:00", "b": 431.0}, {"a": "2025-01-22 14:30:00", "b": 426.6666666666667}, {"a": "2025-01-22 14:35:00", "b": 433.0}, {"a": "2025-01-22 14:40:00", "b": 427.0}, {"a": "2025-01-22 14:45:00", "b": 426.0}, {"a": "2025-01-22 14:50:00", "b": 430.2}, {"a": "2025-01-22 14:55:00", "b": 427.5}, {"a": "2025-01-22 15:00:00", "b": 426.6}, {"a": "2025-01-22 15:05:00", "b": 421.6}, {"a": "2025-01-22 15:10:00", "b": 422.25}, {"a": "2025-01-22 15:15:00", "b": 428.0}, {"a": "2025-01-22 15:20:00", "b": 426.8}, {"a": "2025-01-22 15:25:00", "b": 446.2}, {"a": "2025-01-22 15:30:00", "b": 464.3333333333333}, {"a": "2025-01-22 15:35:00", "b": 492.75}, {"a": "2025-01-22 15:40:00", "b": 496.2}, {"a": "2025-01-22 15:45:00", "b": 490.25}, {"a": "2025-01-22 15:50:00", "b": 495.0}, {"a": "2025-01-22 15:55:00", "b": 505.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    