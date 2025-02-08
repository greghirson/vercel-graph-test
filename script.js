
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-07 20:00:00", "b": 917.2}, {"a": "2025-02-07 20:05:00", "b": 966.8}, {"a": "2025-02-07 20:10:00", "b": 956.25}, {"a": "2025-02-07 20:15:00", "b": 962.4}, {"a": "2025-02-07 20:20:00", "b": 968.6}, {"a": "2025-02-07 20:25:00", "b": 946.75}, {"a": "2025-02-07 20:30:00", "b": 880.0}, {"a": "2025-02-07 20:35:00", "b": 852.4}, {"a": "2025-02-07 20:40:00", "b": 795.2}, {"a": "2025-02-07 20:45:00", "b": 776.2}, {"a": "2025-02-07 20:50:00", "b": 776.6}, {"a": "2025-02-07 20:55:00", "b": 780.2}, {"a": "2025-02-07 21:00:00", "b": 778.0}, {"a": "2025-02-07 21:05:00", "b": 745.0}, {"a": "2025-02-07 21:10:00", "b": 769.8}, {"a": "2025-02-07 21:15:00", "b": 804.8}, {"a": "2025-02-07 21:20:00", "b": 827.5}, {"a": "2025-02-07 21:25:00", "b": 818.75}, {"a": "2025-02-07 21:30:00", "b": 834.25}, {"a": "2025-02-07 21:35:00", "b": 821.2}, {"a": "2025-02-07 21:40:00", "b": 787.2}, {"a": "2025-02-07 21:45:00", "b": 763.0}, {"a": "2025-02-07 21:50:00", "b": 733.0}, {"a": "2025-02-07 21:55:00", "b": 720.0}, {"a": "2025-02-07 22:00:00", "b": 718.6}, {"a": "2025-02-07 22:05:00", "b": 692.4}, {"a": "2025-02-07 22:10:00", "b": 667.4}, {"a": "2025-02-07 22:15:00", "b": 658.0}, {"a": "2025-02-07 22:20:00", "b": 637.2}, {"a": "2025-02-07 22:25:00", "b": 622.0}, {"a": "2025-02-07 22:30:00", "b": 625.0}, {"a": "2025-02-07 22:35:00", "b": 625.5}, {"a": "2025-02-07 22:40:00", "b": 612.4}, {"a": "2025-02-07 22:45:00", "b": 602.4}, {"a": "2025-02-07 22:50:00", "b": 704.0}, {"a": "2025-02-07 22:55:00", "b": 781.2}, {"a": "2025-02-07 23:00:00", "b": 759.4}, {"a": "2025-02-07 23:05:00", "b": 709.2}, {"a": "2025-02-07 23:10:00", "b": 691.4}, {"a": "2025-02-07 23:15:00", "b": 655.2}, {"a": "2025-02-07 23:20:00", "b": 637.0}, {"a": "2025-02-07 23:25:00", "b": 616.0}, {"a": "2025-02-07 23:30:00", "b": 603.6666666666666}, {"a": "2025-02-07 23:35:00", "b": 604.2}, {"a": "2025-02-07 23:40:00", "b": 585.0}, {"a": "2025-02-07 23:45:00", "b": 583.4}, {"a": "2025-02-07 23:50:00", "b": 580.6}, {"a": "2025-02-07 23:55:00", "b": 556.2}, {"a": "2025-02-08 00:00:00", "b": 553.4}, {"a": "2025-02-08 00:05:00", "b": 553.6}, {"a": "2025-02-08 00:10:00", "b": 555.3333333333334}, {"a": "2025-02-08 00:15:00", "b": 560.8}, {"a": "2025-02-08 00:20:00", "b": 548.5}, {"a": "2025-02-08 00:25:00", "b": 538.0}, {"a": "2025-02-08 00:30:00", "b": 543.25}, {"a": "2025-02-08 00:35:00", "b": 532.75}, {"a": "2025-02-08 00:40:00", "b": 532.25}, {"a": "2025-02-08 00:45:00", "b": 541.0}, {"a": "2025-02-08 00:50:00", "b": 531.4}, {"a": "2025-02-08 00:55:00", "b": 657.0}, {"a": "2025-02-08 01:00:00", "b": 642.0}, {"a": "2025-02-08 01:05:00", "b": 620.8}, {"a": "2025-02-08 01:10:00", "b": 624.2}, {"a": "2025-02-08 01:15:00", "b": 614.4}, {"a": "2025-02-08 01:20:00", "b": 601.2}, {"a": "2025-02-08 01:25:00", "b": 595.0}, {"a": "2025-02-08 01:30:00", "b": 590.5}, {"a": "2025-02-08 01:35:00", "b": 585.3333333333334}, {"a": "2025-02-08 01:40:00", "b": 555.4}, {"a": "2025-02-08 01:45:00", "b": 544.0}, {"a": "2025-02-08 01:50:00", "b": 568.4}, {"a": "2025-02-08 01:55:00", "b": 620.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    