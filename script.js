
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-02 14:00:00", "b": 1332.2}, {"a": "2024-12-02 14:05:00", "b": 402.6666666666667}, {"a": "2024-12-02 14:10:00", "b": 1606.2}, {"a": "2024-12-02 14:15:00", "b": 1611.8}, {"a": "2024-12-02 14:20:00", "b": 1803.2}, {"a": "2024-12-02 14:25:00", "b": 1804.6}, {"a": "2024-12-02 14:30:00", "b": 401.25}, {"a": "2024-12-02 14:35:00", "b": 402.3333333333333}, {"a": "2024-12-02 14:40:00", "b": 402.0}, {"a": "2024-12-02 14:45:00", "b": 402.0}, {"a": "2024-12-02 14:50:00", "b": 402.25}, {"a": "2024-12-02 14:55:00", "b": 402.5}, {"a": "2024-12-02 15:00:00", "b": 402.6666666666667}, {"a": "2024-12-02 15:05:00", "b": 402.5}, {"a": "2024-12-02 15:10:00", "b": 401.4}, {"a": "2024-12-02 15:15:00", "b": 403.0}, {"a": "2024-12-02 15:20:00", "b": 402.0}, {"a": "2024-12-02 15:25:00", "b": 401.3333333333333}, {"a": "2024-12-02 15:30:00", "b": 402.75}, {"a": "2024-12-02 15:35:00", "b": 961.5}, {"a": "2024-12-02 15:40:00", "b": 1250.4}, {"a": "2024-12-02 15:45:00", "b": 1549.0}, {"a": "2024-12-02 15:50:00", "b": 721.8}, {"a": "2024-12-02 15:55:00", "b": 401.8}, {"a": "2024-12-02 16:00:00", "b": 402.5}, {"a": "2024-12-02 16:05:00", "b": 402.5}, {"a": "2024-12-02 16:10:00", "b": 402.0}, {"a": "2024-12-02 16:15:00", "b": 402.25}, {"a": "2024-12-02 16:20:00", "b": 401.0}, {"a": "2024-12-02 16:25:00", "b": 402.0}, {"a": "2024-12-02 16:30:00", "b": 503.4}, {"a": "2024-12-02 16:35:00", "b": 632.8}, {"a": "2024-12-02 16:40:00", "b": 2639.2}, {"a": "2024-12-02 16:45:00", "b": 2175.6}, {"a": "2024-12-02 16:50:00", "b": 2799.2}, {"a": "2024-12-02 16:55:00", "b": 3189.0}, {"a": "2024-12-02 17:00:00", "b": 2650.0}, {"a": "2024-12-02 17:05:00", "b": 2329.4}, {"a": "2024-12-02 17:10:00", "b": 2926.8}, {"a": "2024-12-02 17:15:00", "b": 3302.4}, {"a": "2024-12-02 17:20:00", "b": 3737.6}, {"a": "2024-12-02 17:25:00", "b": 2766.6}, {"a": "2024-12-02 17:30:00", "b": 1712.0}, {"a": "2024-12-02 17:35:00", "b": 1396.0}, {"a": "2024-12-02 17:40:00", "b": 1399.6}, {"a": "2024-12-02 17:45:00", "b": 1884.2}, {"a": "2024-12-02 17:50:00", "b": 1637.4}, {"a": "2024-12-02 17:55:00", "b": 1815.4}, {"a": "2024-12-02 18:00:00", "b": 1276.0}, {"a": "2024-12-02 18:05:00", "b": 1897.2}, {"a": "2024-12-02 18:10:00", "b": 1962.8}, {"a": "2024-12-02 18:15:00", "b": 2027.2}, {"a": "2024-12-02 18:20:00", "b": 474.4}, {"a": "2024-12-02 18:25:00", "b": 401.0}, {"a": "2024-12-02 18:30:00", "b": 403.0}, {"a": "2024-12-02 18:35:00", "b": 403.3333333333333}, {"a": "2024-12-02 18:40:00", "b": 400.8}, {"a": "2024-12-02 18:45:00", "b": 403.0}, {"a": "2024-12-02 18:50:00", "b": 400.5}, {"a": "2024-12-02 18:55:00", "b": 402.0}, {"a": "2024-12-02 19:00:00", "b": 402.0}, {"a": "2024-12-02 19:05:00", "b": 401.0}, {"a": "2024-12-02 19:10:00", "b": 402.0}, {"a": "2024-12-02 19:15:00", "b": 402.5}, {"a": "2024-12-02 19:20:00", "b": 403.0}, {"a": "2024-12-02 19:25:00", "b": 402.25}, {"a": "2024-12-02 19:30:00", "b": 401.75}, {"a": "2024-12-02 19:35:00", "b": 401.5}, {"a": "2024-12-02 19:40:00", "b": 401.0}, {"a": "2024-12-02 19:45:00", "b": 401.75}, {"a": "2024-12-02 19:50:00", "b": 402.4}, {"a": "2024-12-02 19:55:00", "b": 402.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    