
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-02 17:00:00", "b": 2650.0}, {"a": "2024-12-02 17:05:00", "b": 2329.4}, {"a": "2024-12-02 17:10:00", "b": 2926.8}, {"a": "2024-12-02 17:15:00", "b": 3302.4}, {"a": "2024-12-02 17:20:00", "b": 3737.6}, {"a": "2024-12-02 17:25:00", "b": 2766.6}, {"a": "2024-12-02 17:30:00", "b": 1712.0}, {"a": "2024-12-02 17:35:00", "b": 1396.0}, {"a": "2024-12-02 17:40:00", "b": 1399.6}, {"a": "2024-12-02 17:45:00", "b": 1884.2}, {"a": "2024-12-02 17:50:00", "b": 1637.4}, {"a": "2024-12-02 17:55:00", "b": 1815.4}, {"a": "2024-12-02 18:00:00", "b": 1276.0}, {"a": "2024-12-02 18:05:00", "b": 1897.2}, {"a": "2024-12-02 18:10:00", "b": 1962.8}, {"a": "2024-12-02 18:15:00", "b": 2027.2}, {"a": "2024-12-02 18:20:00", "b": 474.4}, {"a": "2024-12-02 18:25:00", "b": 401.0}, {"a": "2024-12-02 18:30:00", "b": 403.0}, {"a": "2024-12-02 18:35:00", "b": 403.3333333333333}, {"a": "2024-12-02 18:40:00", "b": 400.8}, {"a": "2024-12-02 18:45:00", "b": 403.0}, {"a": "2024-12-02 18:50:00", "b": 400.5}, {"a": "2024-12-02 18:55:00", "b": 402.0}, {"a": "2024-12-02 19:00:00", "b": 402.0}, {"a": "2024-12-02 19:05:00", "b": 401.0}, {"a": "2024-12-02 19:10:00", "b": 402.0}, {"a": "2024-12-02 19:15:00", "b": 402.5}, {"a": "2024-12-02 19:20:00", "b": 403.0}, {"a": "2024-12-02 19:25:00", "b": 402.25}, {"a": "2024-12-02 19:30:00", "b": 401.75}, {"a": "2024-12-02 19:35:00", "b": 401.5}, {"a": "2024-12-02 19:40:00", "b": 401.0}, {"a": "2024-12-02 19:45:00", "b": 401.75}, {"a": "2024-12-02 19:50:00", "b": 402.4}, {"a": "2024-12-02 19:55:00", "b": 402.0}, {"a": "2024-12-02 20:00:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:05:00", "b": 402.0}, {"a": "2024-12-02 20:10:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:15:00", "b": 401.3333333333333}, {"a": "2024-12-02 20:20:00", "b": 401.75}, {"a": "2024-12-02 20:25:00", "b": 401.75}, {"a": "2024-12-02 20:30:00", "b": 402.0}, {"a": "2024-12-02 20:35:00", "b": 402.75}, {"a": "2024-12-02 20:40:00", "b": 402.3333333333333}, {"a": "2024-12-02 20:45:00", "b": 401.6}, {"a": "2024-12-02 20:50:00", "b": 402.0}, {"a": "2024-12-02 20:55:00", "b": 402.3333333333333}, {"a": "2024-12-02 21:00:00", "b": 401.8}, {"a": "2024-12-02 21:05:00", "b": 402.6}, {"a": "2024-12-02 21:10:00", "b": 401.75}, {"a": "2024-12-02 21:15:00", "b": 489.2}, {"a": "2024-12-02 21:20:00", "b": 552.0}, {"a": "2024-12-02 21:25:00", "b": 564.4}, {"a": "2024-12-02 21:30:00", "b": 588.0}, {"a": "2024-12-02 21:35:00", "b": 606.6}, {"a": "2024-12-02 21:40:00", "b": 603.4}, {"a": "2024-12-02 21:45:00", "b": 585.6}, {"a": "2024-12-02 21:50:00", "b": 588.6}, {"a": "2024-12-02 21:55:00", "b": 600.2}, {"a": "2024-12-02 22:00:00", "b": 604.8}, {"a": "2024-12-02 22:05:00", "b": 599.0}, {"a": "2024-12-02 22:10:00", "b": 594.0}, {"a": "2024-12-02 22:15:00", "b": 595.2}, {"a": "2024-12-02 22:20:00", "b": 589.0}, {"a": "2024-12-02 22:25:00", "b": 579.0}, {"a": "2024-12-02 22:30:00", "b": 585.8}, {"a": "2024-12-02 22:35:00", "b": 620.8}, {"a": "2024-12-02 22:40:00", "b": 573.4}, {"a": "2024-12-02 22:45:00", "b": 569.2}, {"a": "2024-12-02 22:50:00", "b": 568.0}, {"a": "2024-12-02 22:55:00", "b": 576.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    