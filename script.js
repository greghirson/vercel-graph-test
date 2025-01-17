
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-16 20:00:00", "b": 641.2}, {"a": "2025-01-16 20:05:00", "b": 655.8}, {"a": "2025-01-16 20:10:00", "b": 665.6666666666666}, {"a": "2025-01-16 20:15:00", "b": 660.0}, {"a": "2025-01-16 20:20:00", "b": 667.0}, {"a": "2025-01-16 20:25:00", "b": 658.2}, {"a": "2025-01-16 20:30:00", "b": 645.6666666666666}, {"a": "2025-01-16 20:35:00", "b": 649.8}, {"a": "2025-01-16 20:40:00", "b": 646.5}, {"a": "2025-01-16 20:45:00", "b": 646.6}, {"a": "2025-01-16 20:50:00", "b": 675.0}, {"a": "2025-01-16 20:55:00", "b": 673.2}, {"a": "2025-01-16 21:00:00", "b": 665.4}, {"a": "2025-01-16 21:05:00", "b": 665.0}, {"a": "2025-01-16 21:10:00", "b": 700.8}, {"a": "2025-01-16 21:15:00", "b": 724.5}, {"a": "2025-01-16 21:20:00", "b": 737.2}, {"a": "2025-01-16 21:25:00", "b": 736.6}, {"a": "2025-01-16 21:30:00", "b": 716.4}, {"a": "2025-01-16 21:35:00", "b": 741.8}, {"a": "2025-01-16 21:40:00", "b": 832.75}, {"a": "2025-01-16 21:45:00", "b": 825.8}, {"a": "2025-01-16 21:50:00", "b": 820.0}, {"a": "2025-01-16 21:55:00", "b": 812.0}, {"a": "2025-01-16 22:00:00", "b": 807.5}, {"a": "2025-01-16 22:05:00", "b": 806.75}, {"a": "2025-01-16 22:10:00", "b": 800.5}, {"a": "2025-01-16 22:15:00", "b": 806.2}, {"a": "2025-01-16 22:20:00", "b": 797.4}, {"a": "2025-01-16 22:25:00", "b": 795.0}, {"a": "2025-01-16 22:30:00", "b": 776.6}, {"a": "2025-01-16 22:35:00", "b": 779.4}, {"a": "2025-01-16 22:40:00", "b": 770.8}, {"a": "2025-01-16 22:45:00", "b": 743.0}, {"a": "2025-01-16 22:50:00", "b": 719.8}, {"a": "2025-01-16 22:55:00", "b": 706.6666666666666}, {"a": "2025-01-16 23:00:00", "b": 697.0}, {"a": "2025-01-16 23:05:00", "b": 694.8}, {"a": "2025-01-16 23:10:00", "b": 693.0}, {"a": "2025-01-16 23:15:00", "b": 679.0}, {"a": "2025-01-16 23:20:00", "b": 665.4}, {"a": "2025-01-16 23:25:00", "b": 658.6}, {"a": "2025-01-16 23:30:00", "b": 665.3333333333334}, {"a": "2025-01-16 23:35:00", "b": 656.8}, {"a": "2025-01-16 23:40:00", "b": 653.0}, {"a": "2025-01-16 23:45:00", "b": 672.4}, {"a": "2025-01-16 23:50:00", "b": 662.6}, {"a": "2025-01-16 23:55:00", "b": 636.0}, {"a": "2025-01-17 00:00:00", "b": 633.0}, {"a": "2025-01-17 00:05:00", "b": 628.75}, {"a": "2025-01-17 00:10:00", "b": 623.4}, {"a": "2025-01-17 00:15:00", "b": 622.2}, {"a": "2025-01-17 00:20:00", "b": 617.0}, {"a": "2025-01-17 00:25:00", "b": 599.0}, {"a": "2025-01-17 00:30:00", "b": 608.0}, {"a": "2025-01-17 00:35:00", "b": 601.4}, {"a": "2025-01-17 00:40:00", "b": 592.2}, {"a": "2025-01-17 00:45:00", "b": 601.0}, {"a": "2025-01-17 00:50:00", "b": 676.4}, {"a": "2025-01-17 00:55:00", "b": 709.5}, {"a": "2025-01-17 01:00:00", "b": 686.2}, {"a": "2025-01-17 01:05:00", "b": 658.6}, {"a": "2025-01-17 01:10:00", "b": 614.2}, {"a": "2025-01-17 01:15:00", "b": 573.8}, {"a": "2025-01-17 01:20:00", "b": 570.5}, {"a": "2025-01-17 01:25:00", "b": 560.0}, {"a": "2025-01-17 01:30:00", "b": 539.4}, {"a": "2025-01-17 01:35:00", "b": 537.2}, {"a": "2025-01-17 01:40:00", "b": 537.25}, {"a": "2025-01-17 01:45:00", "b": 538.6666666666666}, {"a": "2025-01-17 01:50:00", "b": 538.0}, {"a": "2025-01-17 01:55:00", "b": 539.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    