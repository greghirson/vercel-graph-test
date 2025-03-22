
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-21 20:00:00", "b": 592.6}, {"a": "2025-03-21 20:05:00", "b": 579.6666666666666}, {"a": "2025-03-21 20:10:00", "b": 561.0}, {"a": "2025-03-21 20:15:00", "b": 559.8}, {"a": "2025-03-21 20:20:00", "b": 574.2}, {"a": "2025-03-21 20:25:00", "b": 615.6}, {"a": "2025-03-21 20:30:00", "b": 614.6}, {"a": "2025-03-21 20:35:00", "b": 623.0}, {"a": "2025-03-21 20:40:00", "b": 623.4}, {"a": "2025-03-21 20:45:00", "b": 627.3333333333334}, {"a": "2025-03-21 20:50:00", "b": 639.2}, {"a": "2025-03-21 20:55:00", "b": 640.0}, {"a": "2025-03-21 21:00:00", "b": 633.0}, {"a": "2025-03-21 21:05:00", "b": 777.6}, {"a": "2025-03-21 21:10:00", "b": 818.0}, {"a": "2025-03-21 21:15:00", "b": 829.4}, {"a": "2025-03-21 21:20:00", "b": 829.3333333333334}, {"a": "2025-03-21 21:25:00", "b": 822.2}, {"a": "2025-03-21 21:30:00", "b": 834.2}, {"a": "2025-03-21 21:35:00", "b": 824.0}, {"a": "2025-03-21 21:40:00", "b": 833.8}, {"a": "2025-03-21 21:45:00", "b": 849.75}, {"a": "2025-03-21 21:50:00", "b": 824.25}, {"a": "2025-03-21 21:55:00", "b": 822.4}, {"a": "2025-03-21 22:00:00", "b": 823.25}, {"a": "2025-03-21 22:05:00", "b": 826.75}, {"a": "2025-03-21 22:10:00", "b": 826.0}, {"a": "2025-03-21 22:15:00", "b": 815.8}, {"a": "2025-03-21 22:20:00", "b": 793.4}, {"a": "2025-03-21 22:25:00", "b": 754.0}, {"a": "2025-03-21 22:30:00", "b": 745.75}, {"a": "2025-03-21 22:35:00", "b": 759.75}, {"a": "2025-03-21 22:40:00", "b": 776.0}, {"a": "2025-03-21 22:45:00", "b": 769.5}, {"a": "2025-03-21 22:50:00", "b": 753.0}, {"a": "2025-03-21 22:55:00", "b": 737.6}, {"a": "2025-03-21 23:00:00", "b": 732.2}, {"a": "2025-03-21 23:05:00", "b": 751.8}, {"a": "2025-03-21 23:10:00", "b": 738.8}, {"a": "2025-03-21 23:15:00", "b": 721.0}, {"a": "2025-03-21 23:20:00", "b": 724.4}, {"a": "2025-03-21 23:25:00", "b": 744.8}, {"a": "2025-03-21 23:30:00", "b": 752.8}, {"a": "2025-03-21 23:35:00", "b": 747.75}, {"a": "2025-03-21 23:40:00", "b": 731.2}, {"a": "2025-03-21 23:45:00", "b": 743.2}, {"a": "2025-03-21 23:50:00", "b": 734.4}, {"a": "2025-03-21 23:55:00", "b": 722.5}, {"a": "2025-03-22 00:00:00", "b": 728.25}, {"a": "2025-03-22 00:05:00", "b": 730.0}, {"a": "2025-03-22 00:10:00", "b": 731.0}, {"a": "2025-03-22 00:15:00", "b": 730.3333333333334}, {"a": "2025-03-22 00:20:00", "b": 718.75}, {"a": "2025-03-22 00:25:00", "b": 697.0}, {"a": "2025-03-22 00:30:00", "b": 694.25}, {"a": "2025-03-22 00:35:00", "b": 695.0}, {"a": "2025-03-22 00:40:00", "b": 709.3333333333334}, {"a": "2025-03-22 00:45:00", "b": 702.6}, {"a": "2025-03-22 00:50:00", "b": 698.0}, {"a": "2025-03-22 00:55:00", "b": 708.6}, {"a": "2025-03-22 01:00:00", "b": 698.25}, {"a": "2025-03-22 01:05:00", "b": 694.6}, {"a": "2025-03-22 01:10:00", "b": 687.0}, {"a": "2025-03-22 01:15:00", "b": 685.25}, {"a": "2025-03-22 01:20:00", "b": 680.75}, {"a": "2025-03-22 01:25:00", "b": 689.6}, {"a": "2025-03-22 01:30:00", "b": 677.5}, {"a": "2025-03-22 01:35:00", "b": 660.0}, {"a": "2025-03-22 01:40:00", "b": 641.4}, {"a": "2025-03-22 01:45:00", "b": 643.0}, {"a": "2025-03-22 01:50:00", "b": 660.0}, {"a": "2025-03-22 01:55:00", "b": 672.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    