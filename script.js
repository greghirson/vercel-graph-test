
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-24 12:10:00", "b": 406.0}, {"a": "2024-10-24 12:15:00", "b": 405.0}, {"a": "2024-10-24 12:20:00", "b": 403.6666666666667}, {"a": "2024-10-24 12:30:00", "b": 405.0}, {"a": "2024-10-24 12:35:00", "b": 404.3333333333333}, {"a": "2024-10-24 12:40:00", "b": 404.0}, {"a": "2024-10-24 12:45:00", "b": 406.0}, {"a": "2024-10-24 12:50:00", "b": 405.5}, {"a": "2024-10-24 12:55:00", "b": 403.5}, {"a": "2024-10-24 13:00:00", "b": 403.0}, {"a": "2024-10-24 13:05:00", "b": 403.0}, {"a": "2024-10-24 13:10:00", "b": 403.5}, {"a": "2024-10-24 13:15:00", "b": 402.0}, {"a": "2024-10-24 13:20:00", "b": 403.5}, {"a": "2024-10-24 13:25:00", "b": 403.75}, {"a": "2024-10-24 13:30:00", "b": 404.0}, {"a": "2024-10-24 13:35:00", "b": 404.0}, {"a": "2024-10-24 13:40:00", "b": 405.0}, {"a": "2024-10-24 13:45:00", "b": 403.0}, {"a": "2024-10-24 13:50:00", "b": 402.3333333333333}, {"a": "2024-10-24 13:55:00", "b": 402.5}, {"a": "2024-10-24 14:00:00", "b": 401.0}, {"a": "2024-10-24 14:05:00", "b": 404.0}, {"a": "2024-10-24 14:10:00", "b": 404.5}, {"a": "2024-10-24 14:15:00", "b": 403.0}, {"a": "2024-10-24 14:20:00", "b": 401.5}, {"a": "2024-10-24 14:25:00", "b": 401.6666666666667}, {"a": "2024-10-24 14:30:00", "b": 401.5}, {"a": "2024-10-24 14:35:00", "b": 404.0}, {"a": "2024-10-24 14:40:00", "b": 402.0}, {"a": "2024-10-24 14:45:00", "b": 401.0}, {"a": "2024-10-24 14:50:00", "b": 402.5}, {"a": "2024-10-24 14:55:00", "b": 401.75}, {"a": "2024-10-24 15:00:00", "b": 402.8}, {"a": "2024-10-24 15:05:00", "b": 401.8}, {"a": "2024-10-24 15:10:00", "b": 402.3333333333333}, {"a": "2024-10-24 15:15:00", "b": 402.6666666666667}, {"a": "2024-10-24 15:20:00", "b": 402.0}, {"a": "2024-10-24 15:25:00", "b": 402.0}, {"a": "2024-10-24 15:30:00", "b": 400.5}, {"a": "2024-10-24 15:35:00", "b": 402.0}, {"a": "2024-10-24 15:40:00", "b": 402.0}, {"a": "2024-10-24 15:45:00", "b": 402.0}, {"a": "2024-10-24 15:50:00", "b": 401.0}, {"a": "2024-10-24 15:55:00", "b": 401.3333333333333}, {"a": "2024-10-24 16:00:00", "b": 402.2}, {"a": "2024-10-24 16:05:00", "b": 401.2}, {"a": "2024-10-24 16:10:00", "b": 402.0}, {"a": "2024-10-24 16:15:00", "b": 402.0}, {"a": "2024-10-24 16:20:00", "b": 400.0}, {"a": "2024-10-24 16:25:00", "b": 402.0}, {"a": "2024-10-24 16:30:00", "b": 403.5}, {"a": "2024-10-24 16:35:00", "b": 405.0}, {"a": "2024-10-24 16:40:00", "b": 405.6666666666667}, {"a": "2024-10-24 16:45:00", "b": 408.5}, {"a": "2024-10-24 16:50:00", "b": 418.6666666666667}, {"a": "2024-10-24 16:55:00", "b": 427.5}, {"a": "2024-10-24 17:00:00", "b": 432.5}, {"a": "2024-10-24 17:05:00", "b": 434.2}, {"a": "2024-10-24 17:10:00", "b": 415.2}, {"a": "2024-10-24 17:15:00", "b": 409.2}, {"a": "2024-10-24 17:20:00", "b": 414.25}, {"a": "2024-10-24 17:25:00", "b": 421.8}, {"a": "2024-10-24 17:30:00", "b": 426.3333333333333}, {"a": "2024-10-24 17:35:00", "b": 430.2}, {"a": "2024-10-24 17:40:00", "b": 444.0}, {"a": "2024-10-24 17:45:00", "b": 458.0}, {"a": "2024-10-24 17:50:00", "b": 477.6}, {"a": "2024-10-24 17:55:00", "b": 502.6}, {"a": "2024-10-24 18:00:00", "b": 506.8}, {"a": "2024-10-24 18:05:00", "b": 521.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    