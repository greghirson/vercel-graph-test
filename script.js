
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-31 09:00:00", "b": 538.4}, {"a": "2025-01-31 09:05:00", "b": 526.75}, {"a": "2025-01-31 09:10:00", "b": 536.8}, {"a": "2025-01-31 09:15:00", "b": 543.2}, {"a": "2025-01-31 09:20:00", "b": 531.8}, {"a": "2025-01-31 09:25:00", "b": 548.0}, {"a": "2025-01-31 09:30:00", "b": 539.0}, {"a": "2025-01-31 09:35:00", "b": 530.75}, {"a": "2025-01-31 09:40:00", "b": 531.2}, {"a": "2025-01-31 09:45:00", "b": 527.75}, {"a": "2025-01-31 09:50:00", "b": 511.8}, {"a": "2025-01-31 09:55:00", "b": 502.2}, {"a": "2025-01-31 10:00:00", "b": 506.0}, {"a": "2025-01-31 10:05:00", "b": 517.75}, {"a": "2025-01-31 10:10:00", "b": 542.6}, {"a": "2025-01-31 10:15:00", "b": 574.4}, {"a": "2025-01-31 10:20:00", "b": 596.8}, {"a": "2025-01-31 10:25:00", "b": 622.8}, {"a": "2025-01-31 10:30:00", "b": 638.0}, {"a": "2025-01-31 10:35:00", "b": 611.0}, {"a": "2025-01-31 10:40:00", "b": 506.0}, {"a": "2025-01-31 10:45:00", "b": 487.2}, {"a": "2025-01-31 10:50:00", "b": 486.5}, {"a": "2025-01-31 10:55:00", "b": 492.2}, {"a": "2025-01-31 11:00:00", "b": 476.2}, {"a": "2025-01-31 11:05:00", "b": 470.75}, {"a": "2025-01-31 11:10:00", "b": 478.0}, {"a": "2025-01-31 11:15:00", "b": 478.2}, {"a": "2025-01-31 11:20:00", "b": 486.8}, {"a": "2025-01-31 11:25:00", "b": 485.2}, {"a": "2025-01-31 11:30:00", "b": 484.25}, {"a": "2025-01-31 11:35:00", "b": 481.5}, {"a": "2025-01-31 11:40:00", "b": 473.4}, {"a": "2025-01-31 11:45:00", "b": 480.4}, {"a": "2025-01-31 11:50:00", "b": 465.2}, {"a": "2025-01-31 11:55:00", "b": 455.6}, {"a": "2025-01-31 12:00:00", "b": 468.0}, {"a": "2025-01-31 12:05:00", "b": 471.8}, {"a": "2025-01-31 12:10:00", "b": 462.75}, {"a": "2025-01-31 12:15:00", "b": 456.5}, {"a": "2025-01-31 12:20:00", "b": 447.8}, {"a": "2025-01-31 12:25:00", "b": 453.25}, {"a": "2025-01-31 12:30:00", "b": 462.0}, {"a": "2025-01-31 12:35:00", "b": 463.6}, {"a": "2025-01-31 12:40:00", "b": 452.6666666666667}, {"a": "2025-01-31 12:45:00", "b": 455.0}, {"a": "2025-01-31 12:50:00", "b": 461.8}, {"a": "2025-01-31 12:55:00", "b": 464.0}, {"a": "2025-01-31 13:00:00", "b": 460.8}, {"a": "2025-01-31 13:05:00", "b": 447.2}, {"a": "2025-01-31 13:10:00", "b": 426.0}, {"a": "2025-01-31 13:15:00", "b": 433.8}, {"a": "2025-01-31 13:20:00", "b": 442.25}, {"a": "2025-01-31 13:25:00", "b": 443.4}, {"a": "2025-01-31 13:30:00", "b": 437.2}, {"a": "2025-01-31 13:35:00", "b": 434.3333333333333}, {"a": "2025-01-31 13:40:00", "b": 439.0}, {"a": "2025-01-31 13:45:00", "b": 450.0}, {"a": "2025-01-31 13:50:00", "b": 448.4}, {"a": "2025-01-31 13:55:00", "b": 472.8}, {"a": "2025-01-31 14:00:00", "b": 470.3333333333333}, {"a": "2025-01-31 14:05:00", "b": 468.6}, {"a": "2025-01-31 14:10:00", "b": 471.2}, {"a": "2025-01-31 14:15:00", "b": 475.6}, {"a": "2025-01-31 14:20:00", "b": 473.8}, {"a": "2025-01-31 14:25:00", "b": 477.0}, {"a": "2025-01-31 14:30:00", "b": 474.6}, {"a": "2025-01-31 14:35:00", "b": 521.4}, {"a": "2025-01-31 14:40:00", "b": 557.2}, {"a": "2025-01-31 14:45:00", "b": 510.0}, {"a": "2025-01-31 14:50:00", "b": 476.6}, {"a": "2025-01-31 14:55:00", "b": 476.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    