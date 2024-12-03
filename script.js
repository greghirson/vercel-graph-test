
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-02 19:00:00", "b": 402.0}, {"a": "2024-12-02 19:05:00", "b": 401.0}, {"a": "2024-12-02 19:10:00", "b": 402.0}, {"a": "2024-12-02 19:15:00", "b": 402.5}, {"a": "2024-12-02 19:20:00", "b": 403.0}, {"a": "2024-12-02 19:25:00", "b": 402.25}, {"a": "2024-12-02 19:30:00", "b": 401.75}, {"a": "2024-12-02 19:35:00", "b": 401.5}, {"a": "2024-12-02 19:40:00", "b": 401.0}, {"a": "2024-12-02 19:45:00", "b": 401.75}, {"a": "2024-12-02 19:50:00", "b": 402.4}, {"a": "2024-12-02 19:55:00", "b": 402.0}, {"a": "2024-12-02 20:00:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:05:00", "b": 402.0}, {"a": "2024-12-02 20:10:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:15:00", "b": 401.3333333333333}, {"a": "2024-12-02 20:20:00", "b": 401.75}, {"a": "2024-12-02 20:25:00", "b": 401.75}, {"a": "2024-12-02 20:30:00", "b": 402.0}, {"a": "2024-12-02 20:35:00", "b": 402.75}, {"a": "2024-12-02 20:40:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:45:00", "b": 401.6}, {"a": "2024-12-02 20:50:00", "b": 402.0}, {"a": "2024-12-02 20:55:00", "b": 402.3333333333333}, {"a": "2024-12-02 21:00:00", "b": 401.8}, {"a": "2024-12-02 21:05:00", "b": 402.6}, {"a": "2024-12-02 21:10:00", "b": 401.75}, {"a": "2024-12-02 21:15:00", "b": 489.2}, {"a": "2024-12-02 21:20:00", "b": 552.0}, {"a": "2024-12-02 21:25:00", "b": 564.4}, {"a": "2024-12-02 21:30:00", "b": 588.0}, {"a": "2024-12-02 21:35:00", "b": 606.6}, {"a": "2024-12-02 21:40:00", "b": 603.4}, {"a": "2024-12-02 21:45:00", "b": 585.6}, {"a": "2024-12-02 21:50:00", "b": 588.6}, {"a": "2024-12-02 21:55:00", "b": 600.2}, {"a": "2024-12-02 22:00:00", "b": 604.8}, {"a": "2024-12-02 22:05:00", "b": 599.0}, {"a": "2024-12-02 22:10:00", "b": 594.0}, {"a": "2024-12-02 22:15:00", "b": 595.2}, {"a": "2024-12-02 22:20:00", "b": 589.0}, {"a": "2024-12-02 22:25:00", "b": 579.0}, {"a": "2024-12-02 22:30:00", "b": 585.8}, {"a": "2024-12-02 22:35:00", "b": 620.8}, {"a": "2024-12-02 22:40:00", "b": 573.4}, {"a": "2024-12-02 22:45:00", "b": 569.2}, {"a": "2024-12-02 22:50:00", "b": 568.0}, {"a": "2024-12-02 22:55:00", "b": 576.0}, {"a": "2024-12-02 23:00:00", "b": 564.6}, {"a": "2024-12-02 23:05:00", "b": 550.8}, {"a": "2024-12-02 23:10:00", "b": 548.8}, {"a": "2024-12-02 23:15:00", "b": 562.2}, {"a": "2024-12-02 23:20:00", "b": 573.0}, {"a": "2024-12-02 23:25:00", "b": 571.2}, {"a": "2024-12-02 23:30:00", "b": 582.4}, {"a": "2024-12-02 23:35:00", "b": 574.4}, {"a": "2024-12-02 23:40:00", "b": 547.25}, {"a": "2024-12-02 23:45:00", "b": 549.4}, {"a": "2024-12-02 23:50:00", "b": 550.8}, {"a": "2024-12-02 23:55:00", "b": 548.4}, {"a": "2024-12-03 00:00:00", "b": 532.6}, {"a": "2024-12-03 00:05:00", "b": 554.25}, {"a": "2024-12-03 00:10:00", "b": 559.2}, {"a": "2024-12-03 00:15:00", "b": 533.4}, {"a": "2024-12-03 00:20:00", "b": 537.6}, {"a": "2024-12-03 00:25:00", "b": 534.3333333333334}, {"a": "2024-12-03 00:30:00", "b": 533.6}, {"a": "2024-12-03 00:35:00", "b": 551.6}, {"a": "2024-12-03 00:40:00", "b": 546.4}, {"a": "2024-12-03 00:45:00", "b": 550.0}, {"a": "2024-12-03 00:50:00", "b": 523.0}, {"a": "2024-12-03 00:55:00", "b": 539.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    