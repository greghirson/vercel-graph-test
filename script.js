
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-21 09:20:00", "b": 402.0}, {"a": "2024-10-21 09:25:00", "b": 401.0}, {"a": "2024-10-21 09:30:00", "b": 401.4}, {"a": "2024-10-21 09:35:00", "b": 402.0}, {"a": "2024-10-21 09:40:00", "b": 402.0}, {"a": "2024-10-21 09:45:00", "b": 403.0}, {"a": "2024-10-21 09:50:00", "b": 402.25}, {"a": "2024-10-21 09:55:00", "b": 402.0}, {"a": "2024-10-21 10:00:00", "b": 402.75}, {"a": "2024-10-21 10:05:00", "b": 401.6666666666667}, {"a": "2024-10-21 10:10:00", "b": 401.75}, {"a": "2024-10-21 10:15:00", "b": 402.5}, {"a": "2024-10-21 10:20:00", "b": 402.0}, {"a": "2024-10-21 10:25:00", "b": 401.75}, {"a": "2024-10-21 10:30:00", "b": 403.5}, {"a": "2024-10-21 10:35:00", "b": 402.0}, {"a": "2024-10-21 10:40:00", "b": 402.0}, {"a": "2024-10-21 10:45:00", "b": 401.0}, {"a": "2024-10-21 10:50:00", "b": 403.0}, {"a": "2024-10-21 10:55:00", "b": 402.2}, {"a": "2024-10-21 11:00:00", "b": 402.3333333333333}, {"a": "2024-10-21 11:05:00", "b": 401.25}, {"a": "2024-10-21 11:10:00", "b": 402.5}, {"a": "2024-10-21 11:15:00", "b": 401.0}, {"a": "2024-10-21 11:20:00", "b": 402.25}, {"a": "2024-10-21 11:25:00", "b": 402.4}, {"a": "2024-10-21 11:30:00", "b": 404.5}, {"a": "2024-10-21 11:35:00", "b": 421.25}, {"a": "2024-10-21 11:40:00", "b": 438.75}, {"a": "2024-10-21 11:45:00", "b": 457.6666666666667}, {"a": "2024-10-21 11:50:00", "b": 460.5}, {"a": "2024-10-21 11:55:00", "b": 442.8}, {"a": "2024-10-21 12:00:00", "b": 435.0}, {"a": "2024-10-21 12:05:00", "b": 418.0}, {"a": "2024-10-21 12:10:00", "b": 407.5}, {"a": "2024-10-21 12:15:00", "b": 404.75}, {"a": "2024-10-21 12:20:00", "b": 402.25}, {"a": "2024-10-21 12:25:00", "b": 402.4}, {"a": "2024-10-21 12:30:00", "b": 402.75}, {"a": "2024-10-21 12:35:00", "b": 401.6666666666667}, {"a": "2024-10-21 12:40:00", "b": 401.4}, {"a": "2024-10-21 12:45:00", "b": 402.75}, {"a": "2024-10-21 12:50:00", "b": 402.25}, {"a": "2024-10-21 12:55:00", "b": 402.0}, {"a": "2024-10-21 13:00:00", "b": 401.75}, {"a": "2024-10-21 13:05:00", "b": 402.0}, {"a": "2024-10-21 13:10:00", "b": 401.75}, {"a": "2024-10-21 13:15:00", "b": 402.25}, {"a": "2024-10-21 13:20:00", "b": 401.25}, {"a": "2024-10-21 13:25:00", "b": 402.5}, {"a": "2024-10-21 13:30:00", "b": 402.75}, {"a": "2024-10-21 13:35:00", "b": 402.0}, {"a": "2024-10-21 13:40:00", "b": 401.0}, {"a": "2024-10-21 13:45:00", "b": 402.5}, {"a": "2024-10-21 13:50:00", "b": 403.5}, {"a": "2024-10-21 13:55:00", "b": 401.75}, {"a": "2024-10-21 14:00:00", "b": 401.25}, {"a": "2024-10-21 14:05:00", "b": 401.4}, {"a": "2024-10-21 14:10:00", "b": 402.3333333333333}, {"a": "2024-10-21 14:15:00", "b": 402.25}, {"a": "2024-10-21 14:20:00", "b": 402.0}, {"a": "2024-10-21 14:25:00", "b": 402.8}, {"a": "2024-10-21 14:30:00", "b": 402.3333333333333}, {"a": "2024-10-21 14:35:00", "b": 402.25}, {"a": "2024-10-21 14:40:00", "b": 400.8}, {"a": "2024-10-21 14:45:00", "b": 402.4}, {"a": "2024-10-21 14:50:00", "b": 403.3333333333333}, {"a": "2024-10-21 14:55:00", "b": 402.6666666666667}, {"a": "2024-10-21 15:00:00", "b": 401.8}, {"a": "2024-10-21 15:05:00", "b": 402.0}, {"a": "2024-10-21 15:10:00", "b": 401.3333333333333}, {"a": "2024-10-21 15:15:00", "b": 403.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    