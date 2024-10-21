
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-20 18:00:00", "b": 401.5}, {"a": "2024-10-20 18:05:00", "b": 402.2}, {"a": "2024-10-20 18:10:00", "b": 402.3333333333333}, {"a": "2024-10-20 18:15:00", "b": 401.0}, {"a": "2024-10-20 18:20:00", "b": 402.0}, {"a": "2024-10-20 18:25:00", "b": 401.2}, {"a": "2024-10-20 18:30:00", "b": 401.0}, {"a": "2024-10-20 18:35:00", "b": 403.0}, {"a": "2024-10-20 18:40:00", "b": 402.5}, {"a": "2024-10-20 18:45:00", "b": 402.0}, {"a": "2024-10-20 18:50:00", "b": 402.2}, {"a": "2024-10-20 18:55:00", "b": 401.75}, {"a": "2024-10-20 19:00:00", "b": 401.4}, {"a": "2024-10-20 19:05:00", "b": 401.75}, {"a": "2024-10-20 19:10:00", "b": 402.0}, {"a": "2024-10-20 19:15:00", "b": 402.0}, {"a": "2024-10-20 19:20:00", "b": 401.8}, {"a": "2024-10-20 19:25:00", "b": 401.2}, {"a": "2024-10-20 19:30:00", "b": 402.0}, {"a": "2024-10-20 19:35:00", "b": 402.0}, {"a": "2024-10-20 19:40:00", "b": 401.6666666666667}, {"a": "2024-10-20 19:45:00", "b": 403.0}, {"a": "2024-10-20 19:50:00", "b": 401.25}, {"a": "2024-10-20 19:55:00", "b": 401.75}, {"a": "2024-10-20 20:00:00", "b": 402.2}, {"a": "2024-10-20 20:05:00", "b": 401.6}, {"a": "2024-10-20 20:10:00", "b": 421.8}, {"a": "2024-10-20 20:15:00", "b": 465.4}, {"a": "2024-10-20 20:20:00", "b": 403.0}, {"a": "2024-10-20 20:25:00", "b": 405.0}, {"a": "2024-10-20 20:30:00", "b": 404.5}, {"a": "2024-10-20 20:35:00", "b": 404.5}, {"a": "2024-10-20 20:40:00", "b": 404.0}, {"a": "2024-10-20 20:45:00", "b": 403.0}, {"a": "2024-10-20 20:50:00", "b": 404.0}, {"a": "2024-10-20 20:55:00", "b": 404.5}, {"a": "2024-10-20 21:00:00", "b": 404.5}, {"a": "2024-10-20 21:05:00", "b": 407.0}, {"a": "2024-10-20 21:10:00", "b": 413.0}, {"a": "2024-10-20 21:15:00", "b": 427.6}, {"a": "2024-10-20 21:20:00", "b": 432.5}, {"a": "2024-10-20 21:25:00", "b": 440.0}, {"a": "2024-10-20 21:30:00", "b": 443.75}, {"a": "2024-10-20 21:35:00", "b": 436.8}, {"a": "2024-10-20 21:40:00", "b": 418.0}, {"a": "2024-10-20 21:45:00", "b": 407.0}, {"a": "2024-10-20 21:50:00", "b": 406.0}, {"a": "2024-10-20 21:55:00", "b": 404.0}, {"a": "2024-10-20 22:00:00", "b": 404.5}, {"a": "2024-10-20 22:05:00", "b": 405.5}, {"a": "2024-10-20 22:10:00", "b": 407.3333333333333}, {"a": "2024-10-20 22:15:00", "b": 405.5}, {"a": "2024-10-20 22:20:00", "b": 406.5}, {"a": "2024-10-20 22:25:00", "b": 407.6666666666667}, {"a": "2024-10-20 22:30:00", "b": 406.0}, {"a": "2024-10-20 22:35:00", "b": 405.5}, {"a": "2024-10-20 22:45:00", "b": 403.0}, {"a": "2024-10-20 22:50:00", "b": 402.0}, {"a": "2024-10-20 22:55:00", "b": 403.0}, {"a": "2024-10-20 23:00:00", "b": 401.6666666666667}, {"a": "2024-10-20 23:05:00", "b": 401.4}, {"a": "2024-10-20 23:10:00", "b": 401.5}, {"a": "2024-10-20 23:15:00", "b": 402.5}, {"a": "2024-10-20 23:20:00", "b": 402.0}, {"a": "2024-10-20 23:25:00", "b": 402.0}, {"a": "2024-10-20 23:30:00", "b": 401.25}, {"a": "2024-10-20 23:35:00", "b": 401.6666666666667}, {"a": "2024-10-20 23:40:00", "b": 401.4}, {"a": "2024-10-20 23:45:00", "b": 401.8}, {"a": "2024-10-20 23:50:00", "b": 401.75}, {"a": "2024-10-20 23:55:00", "b": 402.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    