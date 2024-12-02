
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-01 22:00:00", "b": 568.0}, {"a": "2024-12-01 22:05:00", "b": 564.0}, {"a": "2024-12-01 22:10:00", "b": 573.3333333333334}, {"a": "2024-12-01 22:15:00", "b": 577.4}, {"a": "2024-12-01 22:20:00", "b": 635.4}, {"a": "2024-12-01 22:25:00", "b": 644.8}, {"a": "2024-12-01 22:30:00", "b": 623.4}, {"a": "2024-12-01 22:35:00", "b": 649.2}, {"a": "2024-12-01 22:40:00", "b": 584.0}, {"a": "2024-12-01 22:45:00", "b": 592.75}, {"a": "2024-12-01 22:50:00", "b": 606.8}, {"a": "2024-12-01 22:55:00", "b": 908.25}, {"a": "2024-12-01 23:00:00", "b": 682.2}, {"a": "2024-12-01 23:05:00", "b": 626.4}, {"a": "2024-12-01 23:10:00", "b": 599.8}, {"a": "2024-12-01 23:15:00", "b": 613.6}, {"a": "2024-12-01 23:20:00", "b": 591.4}, {"a": "2024-12-01 23:25:00", "b": 609.4}, {"a": "2024-12-01 23:30:00", "b": 588.0}, {"a": "2024-12-01 23:35:00", "b": 594.4}, {"a": "2024-12-01 23:40:00", "b": 609.0}, {"a": "2024-12-01 23:45:00", "b": 629.2}, {"a": "2024-12-01 23:50:00", "b": 602.0}, {"a": "2024-12-01 23:55:00", "b": 558.6}, {"a": "2024-12-02 00:00:00", "b": 1873.0}, {"a": "2024-12-02 00:05:00", "b": 2984.6}, {"a": "2024-12-02 00:10:00", "b": 3771.0}, {"a": "2024-12-02 00:15:00", "b": 3829.5}, {"a": "2024-12-02 00:20:00", "b": 3732.2}, {"a": "2024-12-02 00:25:00", "b": 3686.8}, {"a": "2024-12-02 00:30:00", "b": 3702.0}, {"a": "2024-12-02 00:35:00", "b": 3617.6}, {"a": "2024-12-02 00:40:00", "b": 3556.2}, {"a": "2024-12-02 00:45:00", "b": 3539.4}, {"a": "2024-12-02 00:50:00", "b": 3456.0}, {"a": "2024-12-02 00:55:00", "b": 3155.6}, {"a": "2024-12-02 01:00:00", "b": 2979.8}, {"a": "2024-12-02 01:05:00", "b": 2932.8}, {"a": "2024-12-02 01:10:00", "b": 3330.6}, {"a": "2024-12-02 01:15:00", "b": 2793.8}, {"a": "2024-12-02 01:20:00", "b": 3437.0}, {"a": "2024-12-02 01:25:00", "b": 3829.4}, {"a": "2024-12-02 01:30:00", "b": 3480.8}, {"a": "2024-12-02 01:35:00", "b": 3327.0}, {"a": "2024-12-02 01:40:00", "b": 3121.6}, {"a": "2024-12-02 01:45:00", "b": 2678.8}, {"a": "2024-12-02 01:50:00", "b": 2444.4}, {"a": "2024-12-02 01:55:00", "b": 2650.0}, {"a": "2024-12-02 02:00:00", "b": 2595.6}, {"a": "2024-12-02 02:05:00", "b": 2697.2}, {"a": "2024-12-02 02:10:00", "b": 2689.6}, {"a": "2024-12-02 02:15:00", "b": 2814.4}, {"a": "2024-12-02 02:20:00", "b": 3007.0}, {"a": "2024-12-02 02:25:00", "b": 2689.2}, {"a": "2024-12-02 02:30:00", "b": 2333.8}, {"a": "2024-12-02 02:35:00", "b": 2821.0}, {"a": "2024-12-02 02:40:00", "b": 3491.6}, {"a": "2024-12-02 02:45:00", "b": 3445.4}, {"a": "2024-12-02 02:50:00", "b": 3428.4}, {"a": "2024-12-02 02:55:00", "b": 3552.6}, {"a": "2024-12-02 03:00:00", "b": 3241.2}, {"a": "2024-12-02 03:05:00", "b": 3411.2}, {"a": "2024-12-02 03:10:00", "b": 3294.8}, {"a": "2024-12-02 03:15:00", "b": 3051.0}, {"a": "2024-12-02 03:20:00", "b": 2537.8}, {"a": "2024-12-02 03:25:00", "b": 2576.4}, {"a": "2024-12-02 03:30:00", "b": 2958.8}, {"a": "2024-12-02 03:35:00", "b": 3235.6}, {"a": "2024-12-02 03:40:00", "b": 3146.0}, {"a": "2024-12-02 03:45:00", "b": 2829.6}, {"a": "2024-12-02 03:50:00", "b": 2817.8}, {"a": "2024-12-02 03:55:00", "b": 3095.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    