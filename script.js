
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-12 10:00:00", "b": 553.4}, {"a": "2025-04-12 10:05:00", "b": 566.0}, {"a": "2025-04-12 10:10:00", "b": 548.6}, {"a": "2025-04-12 10:15:00", "b": 581.0}, {"a": "2025-04-12 10:20:00", "b": 552.6}, {"a": "2025-04-12 10:25:00", "b": 548.4}, {"a": "2025-04-12 10:30:00", "b": 546.4}, {"a": "2025-04-12 10:35:00", "b": 556.75}, {"a": "2025-04-12 10:40:00", "b": 536.8}, {"a": "2025-04-12 10:45:00", "b": 534.75}, {"a": "2025-04-12 10:50:00", "b": 538.4}, {"a": "2025-04-12 10:55:00", "b": 541.0}, {"a": "2025-04-12 11:00:00", "b": 534.8}, {"a": "2025-04-12 11:05:00", "b": 551.0}, {"a": "2025-04-12 11:10:00", "b": 530.75}, {"a": "2025-04-12 11:15:00", "b": 546.0}, {"a": "2025-04-12 11:20:00", "b": 530.5}, {"a": "2025-04-12 11:25:00", "b": 521.2}, {"a": "2025-04-12 11:30:00", "b": 542.6}, {"a": "2025-04-12 11:35:00", "b": 523.0}, {"a": "2025-04-12 11:40:00", "b": 525.8}, {"a": "2025-04-12 11:45:00", "b": 530.0}, {"a": "2025-04-12 11:50:00", "b": 516.0}, {"a": "2025-04-12 11:55:00", "b": 521.6}, {"a": "2025-04-12 12:00:00", "b": 511.6}, {"a": "2025-04-12 12:05:00", "b": 525.6}, {"a": "2025-04-12 12:10:00", "b": 508.4}, {"a": "2025-04-12 12:15:00", "b": 510.75}, {"a": "2025-04-12 12:20:00", "b": 510.2}, {"a": "2025-04-12 12:25:00", "b": 519.4}, {"a": "2025-04-12 12:30:00", "b": 508.25}, {"a": "2025-04-12 12:35:00", "b": 495.6666666666667}, {"a": "2025-04-12 12:40:00", "b": 515.6}, {"a": "2025-04-12 12:45:00", "b": 492.0}, {"a": "2025-04-12 12:50:00", "b": 488.6}, {"a": "2025-04-12 12:55:00", "b": 501.8}, {"a": "2025-04-12 13:00:00", "b": 499.4}, {"a": "2025-04-12 13:05:00", "b": 457.0}, {"a": "2025-04-12 13:10:00", "b": 485.8}, {"a": "2025-04-12 13:15:00", "b": 505.0}, {"a": "2025-04-12 13:20:00", "b": 497.2}, {"a": "2025-04-12 13:25:00", "b": 494.2}, {"a": "2025-04-12 13:30:00", "b": 481.0}, {"a": "2025-04-12 13:35:00", "b": 521.6}, {"a": "2025-04-12 13:40:00", "b": 516.6}, {"a": "2025-04-12 13:45:00", "b": 502.2}, {"a": "2025-04-12 13:50:00", "b": 507.4}, {"a": "2025-04-12 13:55:00", "b": 435.6}, {"a": "2025-04-12 14:00:00", "b": 439.2}, {"a": "2025-04-12 14:05:00", "b": 441.25}, {"a": "2025-04-12 14:10:00", "b": 426.25}, {"a": "2025-04-12 14:15:00", "b": 412.25}, {"a": "2025-04-12 14:20:00", "b": 415.4}, {"a": "2025-04-12 14:25:00", "b": 418.0}, {"a": "2025-04-12 14:30:00", "b": 408.6666666666667}, {"a": "2025-04-12 14:35:00", "b": 415.6}, {"a": "2025-04-12 14:40:00", "b": 425.6666666666667}, {"a": "2025-04-12 14:45:00", "b": 428.2}, {"a": "2025-04-12 14:50:00", "b": 429.0}, {"a": "2025-04-12 14:55:00", "b": 440.8}, {"a": "2025-04-12 15:00:00", "b": 417.8}, {"a": "2025-04-12 15:05:00", "b": 414.0}, {"a": "2025-04-12 15:10:00", "b": 421.6}, {"a": "2025-04-12 15:15:00", "b": 414.2}, {"a": "2025-04-12 15:20:00", "b": 409.5}, {"a": "2025-04-12 15:25:00", "b": 409.75}, {"a": "2025-04-12 15:30:00", "b": 407.5}, {"a": "2025-04-12 15:35:00", "b": 453.0}, {"a": "2025-04-12 15:40:00", "b": 455.8}, {"a": "2025-04-12 15:45:00", "b": 452.5}, {"a": "2025-04-12 15:50:00", "b": 433.4}, {"a": "2025-04-12 15:55:00", "b": 427.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    