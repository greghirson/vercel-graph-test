
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 12:30:00", "b": 402.4}, {"a": "2024-11-06 12:35:00", "b": 402.0}, {"a": "2024-11-06 12:40:00", "b": 402.0}, {"a": "2024-11-06 12:45:00", "b": 401.4}, {"a": "2024-11-06 12:50:00", "b": 401.6}, {"a": "2024-11-06 12:55:00", "b": 402.25}, {"a": "2024-11-06 13:00:00", "b": 402.0}, {"a": "2024-11-06 13:05:00", "b": 402.25}, {"a": "2024-11-06 13:10:00", "b": 402.0}, {"a": "2024-11-06 13:15:00", "b": 402.25}, {"a": "2024-11-06 13:20:00", "b": 402.0}, {"a": "2024-11-06 13:25:00", "b": 402.0}, {"a": "2024-11-06 13:30:00", "b": 402.6666666666667}, {"a": "2024-11-06 13:35:00", "b": 401.6666666666667}, {"a": "2024-11-06 13:40:00", "b": 402.0}, {"a": "2024-11-06 13:45:00", "b": 401.8}, {"a": "2024-11-06 13:50:00", "b": 401.5}, {"a": "2024-11-06 13:55:00", "b": 402.0}, {"a": "2024-11-06 14:00:00", "b": 403.5}, {"a": "2024-11-06 14:05:00", "b": 401.25}, {"a": "2024-11-06 14:10:00", "b": 400.8}, {"a": "2024-11-06 14:15:00", "b": 401.5}, {"a": "2024-11-06 14:20:00", "b": 402.5}, {"a": "2024-11-06 14:25:00", "b": 402.5}, {"a": "2024-11-06 14:30:00", "b": 403.5}, {"a": "2024-11-06 14:35:00", "b": 401.4}, {"a": "2024-11-06 14:40:00", "b": 402.3333333333333}, {"a": "2024-11-06 14:45:00", "b": 402.0}, {"a": "2024-11-06 14:50:00", "b": 401.3333333333333}, {"a": "2024-11-06 14:55:00", "b": 403.0}, {"a": "2024-11-06 15:00:00", "b": 402.0}, {"a": "2024-11-06 15:05:00", "b": 402.4}, {"a": "2024-11-06 15:10:00", "b": 403.2}, {"a": "2024-11-06 15:15:00", "b": 402.0}, {"a": "2024-11-06 15:20:00", "b": 401.6}, {"a": "2024-11-06 15:25:00", "b": 401.6}, {"a": "2024-11-06 15:30:00", "b": 403.5}, {"a": "2024-11-06 15:35:00", "b": 402.2}, {"a": "2024-11-06 15:40:00", "b": 402.2}, {"a": "2024-11-06 15:45:00", "b": 401.5}, {"a": "2024-11-06 15:50:00", "b": 402.0}, {"a": "2024-11-06 15:55:00", "b": 402.0}, {"a": "2024-11-06 16:00:00", "b": 402.6}, {"a": "2024-11-06 16:05:00", "b": 402.5}, {"a": "2024-11-06 16:10:00", "b": 401.75}, {"a": "2024-11-06 16:15:00", "b": 402.6}, {"a": "2024-11-06 16:20:00", "b": 402.5}, {"a": "2024-11-06 16:25:00", "b": 401.6666666666667}, {"a": "2024-11-06 16:30:00", "b": 403.5}, {"a": "2024-11-06 16:35:00", "b": 402.25}, {"a": "2024-11-06 16:40:00", "b": 402.6666666666667}, {"a": "2024-11-06 16:45:00", "b": 402.0}, {"a": "2024-11-06 16:50:00", "b": 401.6}, {"a": "2024-11-06 16:55:00", "b": 403.0}, {"a": "2024-11-06 17:00:00", "b": 402.25}, {"a": "2024-11-06 17:05:00", "b": 402.0}, {"a": "2024-11-06 17:10:00", "b": 402.4}, {"a": "2024-11-06 17:15:00", "b": 403.4}, {"a": "2024-11-06 17:20:00", "b": 427.0}, {"a": "2024-11-06 17:25:00", "b": 426.2}, {"a": "2024-11-06 17:30:00", "b": 409.0}, {"a": "2024-11-06 17:35:00", "b": 401.6666666666667}, {"a": "2024-11-06 17:40:00", "b": 402.5}, {"a": "2024-11-06 17:45:00", "b": 403.0}, {"a": "2024-11-06 17:50:00", "b": 401.5}, {"a": "2024-11-06 17:55:00", "b": 403.0}, {"a": "2024-11-06 18:00:00", "b": 407.5}, {"a": "2024-11-06 18:05:00", "b": 443.0}, {"a": "2024-11-06 18:10:00", "b": 451.25}, {"a": "2024-11-06 18:15:00", "b": 426.8}, {"a": "2024-11-06 18:20:00", "b": 414.5}, {"a": "2024-11-06 18:25:00", "b": 409.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    