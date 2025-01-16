
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-15 11:00:00", "b": 511.0}, {"a": "2025-01-15 11:05:00", "b": 496.5}, {"a": "2025-01-15 11:10:00", "b": 501.4}, {"a": "2025-01-15 11:15:00", "b": 516.0}, {"a": "2025-01-15 11:20:00", "b": 516.25}, {"a": "2025-01-15 11:25:00", "b": 517.25}, {"a": "2025-01-15 11:30:00", "b": 515.75}, {"a": "2025-01-15 11:35:00", "b": 539.4}, {"a": "2025-01-15 11:40:00", "b": 523.75}, {"a": "2025-01-15 11:45:00", "b": 516.6}, {"a": "2025-01-15 11:50:00", "b": 524.8}, {"a": "2025-01-15 11:55:00", "b": 540.0}, {"a": "2025-01-15 12:00:00", "b": 523.6}, {"a": "2025-01-15 12:05:00", "b": 522.2}, {"a": "2025-01-15 12:10:00", "b": 517.0}, {"a": "2025-01-15 12:15:00", "b": 519.8}, {"a": "2025-01-15 12:20:00", "b": 523.75}, {"a": "2025-01-15 12:25:00", "b": 516.0}, {"a": "2025-01-15 12:30:00", "b": 541.6}, {"a": "2025-01-15 12:35:00", "b": 579.2}, {"a": "2025-01-15 12:40:00", "b": 623.8}, {"a": "2025-01-15 12:45:00", "b": 638.75}, {"a": "2025-01-15 12:50:00", "b": 649.8}, {"a": "2025-01-15 12:55:00", "b": 697.8}, {"a": "2025-01-15 13:00:00", "b": 719.4}, {"a": "2025-01-15 13:05:00", "b": 752.5}, {"a": "2025-01-15 13:10:00", "b": 775.6}, {"a": "2025-01-15 13:15:00", "b": 795.0}, {"a": "2025-01-15 13:20:00", "b": 814.4}, {"a": "2025-01-15 13:25:00", "b": 836.4}, {"a": "2025-01-15 13:30:00", "b": 861.5}, {"a": "2025-01-15 13:35:00", "b": 769.8}, {"a": "2025-01-15 13:40:00", "b": 684.2}, {"a": "2025-01-15 13:45:00", "b": 771.8}, {"a": "2025-01-15 13:50:00", "b": 824.4}, {"a": "2025-01-15 13:55:00", "b": 849.0}, {"a": "2025-01-15 14:00:00", "b": 874.2}, {"a": "2025-01-15 14:05:00", "b": 919.2}, {"a": "2025-01-15 14:10:00", "b": 963.8}, {"a": "2025-01-15 14:15:00", "b": 1000.8}, {"a": "2025-01-15 14:20:00", "b": 860.2}, {"a": "2025-01-15 14:25:00", "b": 716.0}, {"a": "2025-01-15 14:30:00", "b": 795.4}, {"a": "2025-01-15 14:35:00", "b": 604.2}, {"a": "2025-01-15 14:40:00", "b": 544.4}, {"a": "2025-01-15 14:45:00", "b": 565.8}, {"a": "2025-01-15 14:50:00", "b": 576.4}, {"a": "2025-01-15 14:55:00", "b": 548.25}, {"a": "2025-01-15 15:00:00", "b": 579.0}, {"a": "2025-01-15 15:05:00", "b": 586.8}, {"a": "2025-01-15 15:10:00", "b": 635.5}, {"a": "2025-01-15 15:15:00", "b": 677.8}, {"a": "2025-01-15 15:20:00", "b": 706.0}, {"a": "2025-01-15 15:25:00", "b": 718.25}, {"a": "2025-01-15 15:30:00", "b": 737.0}, {"a": "2025-01-15 15:35:00", "b": 757.2}, {"a": "2025-01-15 15:40:00", "b": 771.25}, {"a": "2025-01-15 15:45:00", "b": 802.2}, {"a": "2025-01-15 15:50:00", "b": 840.2}, {"a": "2025-01-15 15:55:00", "b": 860.0}, {"a": "2025-01-15 16:00:00", "b": 881.25}, {"a": "2025-01-15 16:05:00", "b": 922.0}, {"a": "2025-01-15 16:10:00", "b": 980.2}, {"a": "2025-01-15 16:15:00", "b": 1013.6}, {"a": "2025-01-15 16:20:00", "b": 1024.75}, {"a": "2025-01-15 16:25:00", "b": 1049.2}, {"a": "2025-01-15 16:30:00", "b": 967.2}, {"a": "2025-01-15 16:35:00", "b": 721.8}, {"a": "2025-01-15 16:40:00", "b": 782.6}, {"a": "2025-01-15 16:45:00", "b": 784.4}, {"a": "2025-01-15 16:50:00", "b": 753.25}, {"a": "2025-01-15 16:55:00", "b": 748.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    