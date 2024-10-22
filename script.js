
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-21 20:10:00", "b": 623.6}, {"a": "2024-10-21 20:15:00", "b": 641.4}, {"a": "2024-10-21 20:20:00", "b": 667.5}, {"a": "2024-10-21 20:25:00", "b": 668.8}, {"a": "2024-10-21 20:30:00", "b": 655.25}, {"a": "2024-10-21 20:35:00", "b": 642.25}, {"a": "2024-10-21 20:40:00", "b": 757.2}, {"a": "2024-10-21 20:45:00", "b": 842.25}, {"a": "2024-10-21 20:50:00", "b": 844.75}, {"a": "2024-10-21 20:55:00", "b": 834.3333333333334}, {"a": "2024-10-21 21:00:00", "b": 822.25}, {"a": "2024-10-21 21:05:00", "b": 821.2}, {"a": "2024-10-21 21:10:00", "b": 818.0}, {"a": "2024-10-21 21:15:00", "b": 841.2}, {"a": "2024-10-21 21:20:00", "b": 846.0}, {"a": "2024-10-21 21:25:00", "b": 827.0}, {"a": "2024-10-21 21:30:00", "b": 828.4}, {"a": "2024-10-21 21:35:00", "b": 835.4}, {"a": "2024-10-21 21:40:00", "b": 822.2}, {"a": "2024-10-21 21:45:00", "b": 766.8}, {"a": "2024-10-21 21:50:00", "b": 729.4}, {"a": "2024-10-21 21:55:00", "b": 670.8}, {"a": "2024-10-21 22:00:00", "b": 606.4}, {"a": "2024-10-21 22:05:00", "b": 564.2}, {"a": "2024-10-21 22:10:00", "b": 566.25}, {"a": "2024-10-21 22:15:00", "b": 599.25}, {"a": "2024-10-21 22:20:00", "b": 604.5}, {"a": "2024-10-21 22:25:00", "b": 595.0}, {"a": "2024-10-21 22:30:00", "b": 607.2}, {"a": "2024-10-21 22:35:00", "b": 601.4}, {"a": "2024-10-21 22:40:00", "b": 590.4}, {"a": "2024-10-21 22:45:00", "b": 588.2}, {"a": "2024-10-21 22:50:00", "b": 594.4}, {"a": "2024-10-21 22:55:00", "b": 577.6}, {"a": "2024-10-21 23:00:00", "b": 571.8}, {"a": "2024-10-21 23:05:00", "b": 574.0}, {"a": "2024-10-21 23:10:00", "b": 577.4}, {"a": "2024-10-21 23:15:00", "b": 564.0}, {"a": "2024-10-21 23:20:00", "b": 565.4}, {"a": "2024-10-21 23:25:00", "b": 556.8}, {"a": "2024-10-21 23:30:00", "b": 549.0}, {"a": "2024-10-21 23:35:00", "b": 550.75}, {"a": "2024-10-21 23:40:00", "b": 550.4}, {"a": "2024-10-21 23:45:00", "b": 536.5}, {"a": "2024-10-21 23:50:00", "b": 528.2}, {"a": "2024-10-21 23:55:00", "b": 525.5}, {"a": "2024-10-22 00:00:00", "b": 520.4}, {"a": "2024-10-22 00:05:00", "b": 518.75}, {"a": "2024-10-22 00:10:00", "b": 519.0}, {"a": "2024-10-22 00:15:00", "b": 516.0}, {"a": "2024-10-22 00:20:00", "b": 498.5}, {"a": "2024-10-22 00:25:00", "b": 499.0}, {"a": "2024-10-22 00:30:00", "b": 514.5}, {"a": "2024-10-22 00:35:00", "b": 504.25}, {"a": "2024-10-22 00:40:00", "b": 505.6666666666667}, {"a": "2024-10-22 00:45:00", "b": 498.6}, {"a": "2024-10-22 00:50:00", "b": 503.6}, {"a": "2024-10-22 00:55:00", "b": 490.4}, {"a": "2024-10-22 01:00:00", "b": 486.6}, {"a": "2024-10-22 01:05:00", "b": 473.6}, {"a": "2024-10-22 01:10:00", "b": 471.4}, {"a": "2024-10-22 01:15:00", "b": 476.2}, {"a": "2024-10-22 01:20:00", "b": 476.8}, {"a": "2024-10-22 01:25:00", "b": 486.8}, {"a": "2024-10-22 01:30:00", "b": 476.6}, {"a": "2024-10-22 01:35:00", "b": 469.0}, {"a": "2024-10-22 01:40:00", "b": 461.8}, {"a": "2024-10-22 01:45:00", "b": 464.8}, {"a": "2024-10-22 01:50:00", "b": 469.2}, {"a": "2024-10-22 01:55:00", "b": 462.0}, {"a": "2024-10-22 02:00:00", "b": 452.0}, {"a": "2024-10-22 02:05:00", "b": 457.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    