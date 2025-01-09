
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-08 17:00:00", "b": 1498.0}, {"a": "2025-01-08 17:05:00", "b": 1732.8}, {"a": "2025-01-08 17:10:00", "b": 1599.8}, {"a": "2025-01-08 17:15:00", "b": 861.4}, {"a": "2025-01-08 17:20:00", "b": 741.2}, {"a": "2025-01-08 17:25:00", "b": 742.6}, {"a": "2025-01-08 17:30:00", "b": 798.4}, {"a": "2025-01-08 17:35:00", "b": 723.2}, {"a": "2025-01-08 17:40:00", "b": 737.8}, {"a": "2025-01-08 17:45:00", "b": 658.6}, {"a": "2025-01-08 17:50:00", "b": 666.4}, {"a": "2025-01-08 17:55:00", "b": 683.4}, {"a": "2025-01-08 18:00:00", "b": 813.6}, {"a": "2025-01-08 18:05:00", "b": 783.4}, {"a": "2025-01-08 18:10:00", "b": 904.0}, {"a": "2025-01-08 18:15:00", "b": 936.6}, {"a": "2025-01-08 18:20:00", "b": 1050.6}, {"a": "2025-01-08 18:25:00", "b": 906.6}, {"a": "2025-01-08 18:30:00", "b": 824.2}, {"a": "2025-01-08 18:35:00", "b": 794.4}, {"a": "2025-01-08 18:40:00", "b": 757.8}, {"a": "2025-01-08 18:45:00", "b": 722.6}, {"a": "2025-01-08 18:50:00", "b": 710.0}, {"a": "2025-01-08 18:55:00", "b": 714.2}, {"a": "2025-01-08 19:00:00", "b": 758.2}, {"a": "2025-01-08 19:05:00", "b": 772.4}, {"a": "2025-01-08 19:10:00", "b": 774.0}, {"a": "2025-01-08 19:15:00", "b": 752.4}, {"a": "2025-01-08 19:20:00", "b": 768.0}, {"a": "2025-01-08 19:25:00", "b": 750.0}, {"a": "2025-01-08 19:30:00", "b": 774.2}, {"a": "2025-01-08 19:35:00", "b": 757.6}, {"a": "2025-01-08 19:40:00", "b": 815.6}, {"a": "2025-01-08 19:45:00", "b": 820.4}, {"a": "2025-01-08 19:50:00", "b": 818.8}, {"a": "2025-01-08 19:55:00", "b": 804.4}, {"a": "2025-01-08 20:00:00", "b": 749.2}, {"a": "2025-01-08 20:05:00", "b": 724.25}, {"a": "2025-01-08 20:10:00", "b": 759.8}, {"a": "2025-01-08 20:15:00", "b": 799.4}, {"a": "2025-01-08 20:20:00", "b": 737.8}, {"a": "2025-01-08 20:25:00", "b": 734.0}, {"a": "2025-01-08 20:30:00", "b": 753.8}, {"a": "2025-01-08 20:35:00", "b": 775.2}, {"a": "2025-01-08 20:40:00", "b": 723.0}, {"a": "2025-01-08 20:45:00", "b": 759.8}, {"a": "2025-01-08 20:50:00", "b": 787.6}, {"a": "2025-01-08 20:55:00", "b": 812.2}, {"a": "2025-01-08 21:00:00", "b": 784.8}, {"a": "2025-01-08 21:05:00", "b": 797.6}, {"a": "2025-01-08 21:10:00", "b": 784.6}, {"a": "2025-01-08 21:15:00", "b": 769.4}, {"a": "2025-01-08 21:20:00", "b": 755.4}, {"a": "2025-01-08 21:25:00", "b": 770.8}, {"a": "2025-01-08 21:30:00", "b": 761.2}, {"a": "2025-01-08 21:35:00", "b": 771.4}, {"a": "2025-01-08 21:40:00", "b": 760.0}, {"a": "2025-01-08 21:45:00", "b": 713.4}, {"a": "2025-01-08 21:50:00", "b": 686.8}, {"a": "2025-01-08 21:55:00", "b": 684.0}, {"a": "2025-01-08 22:00:00", "b": 688.2}, {"a": "2025-01-08 22:05:00", "b": 689.75}, {"a": "2025-01-08 22:10:00", "b": 688.8}, {"a": "2025-01-08 22:15:00", "b": 684.8}, {"a": "2025-01-08 22:20:00", "b": 684.0}, {"a": "2025-01-08 22:25:00", "b": 704.6}, {"a": "2025-01-08 22:30:00", "b": 748.0}, {"a": "2025-01-08 22:35:00", "b": 747.25}, {"a": "2025-01-08 22:40:00", "b": 726.8}, {"a": "2025-01-08 22:45:00", "b": 943.2}, {"a": "2025-01-08 22:50:00", "b": 999.6}, {"a": "2025-01-08 22:55:00", "b": 970.4}, {"a": "2025-01-08 23:00:00", "b": 1013.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    