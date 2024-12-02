
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-01 19:00:00", "b": 3886.6}, {"a": "2024-12-01 19:05:00", "b": 3742.6}, {"a": "2024-12-01 19:10:00", "b": 1647.2}, {"a": "2024-12-01 19:15:00", "b": 1480.2}, {"a": "2024-12-01 19:20:00", "b": 1675.6}, {"a": "2024-12-01 19:25:00", "b": 3011.4}, {"a": "2024-12-01 19:30:00", "b": 3944.8}, {"a": "2024-12-01 19:35:00", "b": 3424.6}, {"a": "2024-12-01 19:40:00", "b": 2806.4}, {"a": "2024-12-01 19:45:00", "b": 2783.2}, {"a": "2024-12-01 19:50:00", "b": 3048.2}, {"a": "2024-12-01 19:55:00", "b": 4025.2}, {"a": "2024-12-01 20:00:00", "b": 3979.8}, {"a": "2024-12-01 20:05:00", "b": 3977.8}, {"a": "2024-12-01 20:10:00", "b": 4579.6}, {"a": "2024-12-01 20:15:00", "b": 4769.6}, {"a": "2024-12-01 20:20:00", "b": 4497.6}, {"a": "2024-12-01 20:25:00", "b": 4379.0}, {"a": "2024-12-01 20:30:00", "b": 4352.4}, {"a": "2024-12-01 20:35:00", "b": 4256.0}, {"a": "2024-12-01 20:40:00", "b": 4476.6}, {"a": "2024-12-01 20:45:00", "b": 1582.6}, {"a": "2024-12-01 20:50:00", "b": 4891.0}, {"a": "2024-12-01 20:55:00", "b": 1603.6}, {"a": "2024-12-01 21:00:00", "b": 1777.4}, {"a": "2024-12-01 21:05:00", "b": 1591.2}, {"a": "2024-12-01 21:10:00", "b": 1325.4}, {"a": "2024-12-01 21:15:00", "b": 1610.8}, {"a": "2024-12-01 21:20:00", "b": 1156.0}, {"a": "2024-12-01 21:25:00", "b": 1208.8}, {"a": "2024-12-01 21:30:00", "b": 1309.4}, {"a": "2024-12-01 21:35:00", "b": 1338.4}, {"a": "2024-12-01 21:40:00", "b": 1119.8}, {"a": "2024-12-01 21:45:00", "b": 551.4}, {"a": "2024-12-01 21:50:00", "b": 582.6}, {"a": "2024-12-01 21:55:00", "b": 582.8}, {"a": "2024-12-01 22:00:00", "b": 568.0}, {"a": "2024-12-01 22:05:00", "b": 564.0}, {"a": "2024-12-01 22:10:00", "b": 573.3333333333334}, {"a": "2024-12-01 22:15:00", "b": 577.4}, {"a": "2024-12-01 22:20:00", "b": 635.4}, {"a": "2024-12-01 22:25:00", "b": 644.8}, {"a": "2024-12-01 22:30:00", "b": 623.4}, {"a": "2024-12-01 22:35:00", "b": 649.2}, {"a": "2024-12-01 22:40:00", "b": 584.0}, {"a": "2024-12-01 22:45:00", "b": 592.75}, {"a": "2024-12-01 22:50:00", "b": 606.8}, {"a": "2024-12-01 22:55:00", "b": 908.25}, {"a": "2024-12-01 23:00:00", "b": 682.2}, {"a": "2024-12-01 23:05:00", "b": 626.4}, {"a": "2024-12-01 23:10:00", "b": 599.8}, {"a": "2024-12-01 23:15:00", "b": 613.6}, {"a": "2024-12-01 23:20:00", "b": 591.4}, {"a": "2024-12-01 23:25:00", "b": 609.4}, {"a": "2024-12-01 23:30:00", "b": 588.0}, {"a": "2024-12-01 23:35:00", "b": 594.4}, {"a": "2024-12-01 23:40:00", "b": 609.0}, {"a": "2024-12-01 23:45:00", "b": 629.2}, {"a": "2024-12-01 23:50:00", "b": 602.0}, {"a": "2024-12-01 23:55:00", "b": 558.6}, {"a": "2024-12-02 00:00:00", "b": 1873.0}, {"a": "2024-12-02 00:05:00", "b": 2984.6}, {"a": "2024-12-02 00:10:00", "b": 3771.0}, {"a": "2024-12-02 00:15:00", "b": 3829.5}, {"a": "2024-12-02 00:20:00", "b": 3732.2}, {"a": "2024-12-02 00:25:00", "b": 3686.8}, {"a": "2024-12-02 00:30:00", "b": 3702.0}, {"a": "2024-12-02 00:35:00", "b": 3617.6}, {"a": "2024-12-02 00:40:00", "b": 3556.2}, {"a": "2024-12-02 00:45:00", "b": 3539.4}, {"a": "2024-12-02 00:50:00", "b": 3456.0}, {"a": "2024-12-02 00:55:00", "b": 3155.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    