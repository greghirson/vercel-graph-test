
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-17 19:00:00", "b": 659.0}, {"a": "2024-12-17 19:05:00", "b": 652.0}, {"a": "2024-12-17 19:10:00", "b": 661.8}, {"a": "2024-12-17 19:15:00", "b": 764.8}, {"a": "2024-12-17 19:20:00", "b": 793.4}, {"a": "2024-12-17 19:25:00", "b": 772.2}, {"a": "2024-12-17 19:30:00", "b": 787.2}, {"a": "2024-12-17 19:35:00", "b": 756.8}, {"a": "2024-12-17 19:40:00", "b": 805.6}, {"a": "2024-12-17 19:45:00", "b": 827.25}, {"a": "2024-12-17 19:50:00", "b": 838.0}, {"a": "2024-12-17 19:55:00", "b": 865.8}, {"a": "2024-12-17 20:00:00", "b": 866.6}, {"a": "2024-12-17 20:05:00", "b": 838.0}, {"a": "2024-12-17 20:10:00", "b": 860.6666666666666}, {"a": "2024-12-17 20:15:00", "b": 856.0}, {"a": "2024-12-17 20:20:00", "b": 830.0}, {"a": "2024-12-17 20:25:00", "b": 833.8}, {"a": "2024-12-17 20:30:00", "b": 830.2}, {"a": "2024-12-17 20:35:00", "b": 824.2}, {"a": "2024-12-17 20:40:00", "b": 816.6}, {"a": "2024-12-17 20:45:00", "b": 812.5}, {"a": "2024-12-17 20:50:00", "b": 811.75}, {"a": "2024-12-17 20:55:00", "b": 799.0}, {"a": "2024-12-17 21:00:00", "b": 805.2}, {"a": "2024-12-17 21:05:00", "b": 794.3333333333334}, {"a": "2024-12-17 21:10:00", "b": 798.8}, {"a": "2024-12-17 21:15:00", "b": 796.8}, {"a": "2024-12-17 21:20:00", "b": 786.4}, {"a": "2024-12-17 21:25:00", "b": 781.6}, {"a": "2024-12-17 21:30:00", "b": 784.0}, {"a": "2024-12-17 21:35:00", "b": 794.0}, {"a": "2024-12-17 21:40:00", "b": 790.0}, {"a": "2024-12-17 21:45:00", "b": 778.25}, {"a": "2024-12-17 21:50:00", "b": 770.4}, {"a": "2024-12-17 21:55:00", "b": 763.25}, {"a": "2024-12-17 22:00:00", "b": 766.6}, {"a": "2024-12-17 22:05:00", "b": 774.8}, {"a": "2024-12-17 22:10:00", "b": 767.2}, {"a": "2024-12-17 22:15:00", "b": 776.2}, {"a": "2024-12-17 22:20:00", "b": 763.2}, {"a": "2024-12-17 22:25:00", "b": 774.8}, {"a": "2024-12-17 22:30:00", "b": 783.0}, {"a": "2024-12-17 22:35:00", "b": 782.75}, {"a": "2024-12-17 22:40:00", "b": 773.0}, {"a": "2024-12-17 22:45:00", "b": 777.4}, {"a": "2024-12-17 22:50:00", "b": 762.6}, {"a": "2024-12-17 22:55:00", "b": 761.8}, {"a": "2024-12-17 23:00:00", "b": 765.2}, {"a": "2024-12-17 23:05:00", "b": 754.3333333333334}, {"a": "2024-12-17 23:10:00", "b": 736.0}, {"a": "2024-12-17 23:15:00", "b": 729.5}, {"a": "2024-12-17 23:20:00", "b": 728.5}, {"a": "2024-12-17 23:25:00", "b": 725.5}, {"a": "2024-12-17 23:30:00", "b": 712.75}, {"a": "2024-12-17 23:35:00", "b": 695.0}, {"a": "2024-12-17 23:40:00", "b": 690.4}, {"a": "2024-12-17 23:45:00", "b": 680.6666666666666}, {"a": "2024-12-17 23:50:00", "b": 672.0}, {"a": "2024-12-17 23:55:00", "b": 666.6}, {"a": "2024-12-18 00:00:00", "b": 669.6}, {"a": "2024-12-18 00:05:00", "b": 663.25}, {"a": "2024-12-18 00:10:00", "b": 646.4}, {"a": "2024-12-18 00:15:00", "b": 643.0}, {"a": "2024-12-18 00:20:00", "b": 623.25}, {"a": "2024-12-18 00:25:00", "b": 626.0}, {"a": "2024-12-18 00:30:00", "b": 620.75}, {"a": "2024-12-18 00:35:00", "b": 610.75}, {"a": "2024-12-18 00:40:00", "b": 594.4}, {"a": "2024-12-18 00:45:00", "b": 582.4}, {"a": "2024-12-18 00:50:00", "b": 592.25}, {"a": "2024-12-18 00:55:00", "b": 577.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    