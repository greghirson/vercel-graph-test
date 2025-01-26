
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-25 11:00:00", "b": 561.0}, {"a": "2025-01-25 11:05:00", "b": 554.2}, {"a": "2025-01-25 11:10:00", "b": 540.6}, {"a": "2025-01-25 11:15:00", "b": 547.25}, {"a": "2025-01-25 11:20:00", "b": 556.6}, {"a": "2025-01-25 11:25:00", "b": 545.2}, {"a": "2025-01-25 11:30:00", "b": 539.6}, {"a": "2025-01-25 11:35:00", "b": 526.8}, {"a": "2025-01-25 11:40:00", "b": 499.8}, {"a": "2025-01-25 11:45:00", "b": 510.5}, {"a": "2025-01-25 11:50:00", "b": 513.0}, {"a": "2025-01-25 11:55:00", "b": 506.4}, {"a": "2025-01-25 12:00:00", "b": 511.8}, {"a": "2025-01-25 12:05:00", "b": 519.75}, {"a": "2025-01-25 12:10:00", "b": 516.2}, {"a": "2025-01-25 12:15:00", "b": 514.4}, {"a": "2025-01-25 12:20:00", "b": 519.8}, {"a": "2025-01-25 12:25:00", "b": 514.6}, {"a": "2025-01-25 12:30:00", "b": 506.2}, {"a": "2025-01-25 12:35:00", "b": 508.8}, {"a": "2025-01-25 12:40:00", "b": 507.25}, {"a": "2025-01-25 12:45:00", "b": 491.6}, {"a": "2025-01-25 12:50:00", "b": 488.6666666666667}, {"a": "2025-01-25 12:55:00", "b": 511.4}, {"a": "2025-01-25 13:00:00", "b": 543.6}, {"a": "2025-01-25 13:05:00", "b": 506.2}, {"a": "2025-01-25 13:10:00", "b": 520.0}, {"a": "2025-01-25 13:15:00", "b": 532.0}, {"a": "2025-01-25 13:20:00", "b": 524.0}, {"a": "2025-01-25 13:25:00", "b": 510.4}, {"a": "2025-01-25 13:30:00", "b": 497.4}, {"a": "2025-01-25 13:35:00", "b": 505.8}, {"a": "2025-01-25 13:40:00", "b": 495.0}, {"a": "2025-01-25 13:45:00", "b": 484.6}, {"a": "2025-01-25 13:50:00", "b": 497.2}, {"a": "2025-01-25 13:55:00", "b": 496.8}, {"a": "2025-01-25 14:00:00", "b": 476.8}, {"a": "2025-01-25 14:05:00", "b": 465.2}, {"a": "2025-01-25 14:10:00", "b": 465.2}, {"a": "2025-01-25 14:15:00", "b": 464.4}, {"a": "2025-01-25 14:20:00", "b": 479.2}, {"a": "2025-01-25 14:25:00", "b": 491.0}, {"a": "2025-01-25 14:30:00", "b": 530.2}, {"a": "2025-01-25 14:35:00", "b": 552.0}, {"a": "2025-01-25 14:40:00", "b": 583.75}, {"a": "2025-01-25 14:45:00", "b": 604.8}, {"a": "2025-01-25 14:50:00", "b": 630.8}, {"a": "2025-01-25 14:55:00", "b": 663.8}, {"a": "2025-01-25 15:00:00", "b": 686.4}, {"a": "2025-01-25 15:05:00", "b": 713.8}, {"a": "2025-01-25 15:10:00", "b": 717.2}, {"a": "2025-01-25 15:15:00", "b": 726.75}, {"a": "2025-01-25 15:20:00", "b": 746.6}, {"a": "2025-01-25 15:25:00", "b": 684.0}, {"a": "2025-01-25 15:30:00", "b": 610.8}, {"a": "2025-01-25 15:35:00", "b": 614.75}, {"a": "2025-01-25 15:40:00", "b": 610.25}, {"a": "2025-01-25 15:45:00", "b": 605.0}, {"a": "2025-01-25 15:50:00", "b": 617.0}, {"a": "2025-01-25 15:55:00", "b": 654.0}, {"a": "2025-01-25 16:00:00", "b": 661.5}, {"a": "2025-01-25 16:05:00", "b": 664.2}, {"a": "2025-01-25 16:10:00", "b": 678.2}, {"a": "2025-01-25 16:15:00", "b": 698.6}, {"a": "2025-01-25 16:20:00", "b": 734.0}, {"a": "2025-01-25 16:25:00", "b": 755.8}, {"a": "2025-01-25 16:30:00", "b": 782.4}, {"a": "2025-01-25 16:35:00", "b": 827.8}, {"a": "2025-01-25 16:40:00", "b": 860.8}, {"a": "2025-01-25 16:45:00", "b": 890.25}, {"a": "2025-01-25 16:50:00", "b": 892.8}, {"a": "2025-01-25 16:55:00", "b": 883.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    