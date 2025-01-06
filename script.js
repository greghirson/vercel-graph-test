
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-05 20:00:00", "b": 766.4}, {"a": "2025-01-05 20:05:00", "b": 824.4}, {"a": "2025-01-05 20:10:00", "b": 834.0}, {"a": "2025-01-05 20:15:00", "b": 825.6}, {"a": "2025-01-05 20:20:00", "b": 808.4}, {"a": "2025-01-05 20:25:00", "b": 829.0}, {"a": "2025-01-05 20:30:00", "b": 836.2}, {"a": "2025-01-05 20:35:00", "b": 836.0}, {"a": "2025-01-05 20:40:00", "b": 819.4}, {"a": "2025-01-05 20:45:00", "b": 812.4}, {"a": "2025-01-05 20:50:00", "b": 831.75}, {"a": "2025-01-05 20:55:00", "b": 871.25}, {"a": "2025-01-05 21:00:00", "b": 1571.5}, {"a": "2025-01-05 21:05:00", "b": 880.6}, {"a": "2025-01-05 21:10:00", "b": 785.2}, {"a": "2025-01-05 21:15:00", "b": 793.6}, {"a": "2025-01-05 21:20:00", "b": 776.5}, {"a": "2025-01-05 21:25:00", "b": 787.8}, {"a": "2025-01-05 21:30:00", "b": 801.0}, {"a": "2025-01-05 21:35:00", "b": 783.25}, {"a": "2025-01-05 21:40:00", "b": 773.6}, {"a": "2025-01-05 21:45:00", "b": 781.8}, {"a": "2025-01-05 21:50:00", "b": 786.2}, {"a": "2025-01-05 21:55:00", "b": 781.2}, {"a": "2025-01-05 22:00:00", "b": 777.6}, {"a": "2025-01-05 22:05:00", "b": 768.2}, {"a": "2025-01-05 22:10:00", "b": 779.0}, {"a": "2025-01-05 22:15:00", "b": 773.5}, {"a": "2025-01-05 22:20:00", "b": 765.2}, {"a": "2025-01-05 22:25:00", "b": 767.6666666666666}, {"a": "2025-01-05 22:30:00", "b": 754.4}, {"a": "2025-01-05 22:35:00", "b": 729.4}, {"a": "2025-01-05 22:40:00", "b": 708.4}, {"a": "2025-01-05 22:45:00", "b": 664.0}, {"a": "2025-01-05 22:50:00", "b": 654.4}, {"a": "2025-01-05 22:55:00", "b": 662.0}, {"a": "2025-01-05 23:00:00", "b": 658.0}, {"a": "2025-01-05 23:05:00", "b": 669.4}, {"a": "2025-01-05 23:10:00", "b": 673.0}, {"a": "2025-01-05 23:15:00", "b": 669.0}, {"a": "2025-01-05 23:20:00", "b": 654.0}, {"a": "2025-01-05 23:25:00", "b": 660.75}, {"a": "2025-01-05 23:30:00", "b": 725.75}, {"a": "2025-01-05 23:35:00", "b": 835.0}, {"a": "2025-01-05 23:40:00", "b": 810.0}, {"a": "2025-01-05 23:45:00", "b": 732.0}, {"a": "2025-01-05 23:50:00", "b": 691.8}, {"a": "2025-01-05 23:55:00", "b": 708.2}, {"a": "2025-01-06 00:00:00", "b": 685.0}, {"a": "2025-01-06 00:05:00", "b": 700.0}, {"a": "2025-01-06 00:10:00", "b": 653.4}, {"a": "2025-01-06 00:15:00", "b": 644.2}, {"a": "2025-01-06 00:20:00", "b": 657.5}, {"a": "2025-01-06 00:25:00", "b": 649.6}, {"a": "2025-01-06 00:30:00", "b": 642.8}, {"a": "2025-01-06 00:35:00", "b": 657.2}, {"a": "2025-01-06 00:40:00", "b": 671.5}, {"a": "2025-01-06 00:45:00", "b": 657.4}, {"a": "2025-01-06 00:50:00", "b": 628.8}, {"a": "2025-01-06 00:55:00", "b": 704.8}, {"a": "2025-01-06 01:00:00", "b": 638.2}, {"a": "2025-01-06 01:05:00", "b": 613.5}, {"a": "2025-01-06 01:10:00", "b": 604.0}, {"a": "2025-01-06 01:15:00", "b": 603.6}, {"a": "2025-01-06 01:20:00", "b": 613.2}, {"a": "2025-01-06 01:25:00", "b": 617.2}, {"a": "2025-01-06 01:30:00", "b": 599.2}, {"a": "2025-01-06 01:35:00", "b": 590.0}, {"a": "2025-01-06 01:40:00", "b": 569.6}, {"a": "2025-01-06 01:45:00", "b": 596.2}, {"a": "2025-01-06 01:50:00", "b": 651.2}, {"a": "2025-01-06 01:55:00", "b": 652.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    