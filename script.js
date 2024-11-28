
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-27 11:00:00", "b": 404.25}, {"a": "2024-11-27 11:05:00", "b": 406.0}, {"a": "2024-11-27 11:10:00", "b": 419.8}, {"a": "2024-11-27 11:15:00", "b": 424.6}, {"a": "2024-11-27 11:20:00", "b": 417.0}, {"a": "2024-11-27 11:25:00", "b": 423.6}, {"a": "2024-11-27 11:30:00", "b": 407.5}, {"a": "2024-11-27 11:35:00", "b": 404.5}, {"a": "2024-11-27 11:40:00", "b": 406.5}, {"a": "2024-11-27 11:45:00", "b": 409.0}, {"a": "2024-11-27 11:50:00", "b": 407.5}, {"a": "2024-11-27 11:55:00", "b": 405.0}, {"a": "2024-11-27 12:00:00", "b": 406.3333333333333}, {"a": "2024-11-27 12:05:00", "b": 410.8}, {"a": "2024-11-27 12:10:00", "b": 403.75}, {"a": "2024-11-27 12:15:00", "b": 403.0}, {"a": "2024-11-27 12:20:00", "b": 406.75}, {"a": "2024-11-27 12:25:00", "b": 411.5}, {"a": "2024-11-27 12:30:00", "b": 413.8}, {"a": "2024-11-27 12:35:00", "b": 416.75}, {"a": "2024-11-27 12:40:00", "b": 423.0}, {"a": "2024-11-27 12:45:00", "b": 404.3333333333333}, {"a": "2024-11-27 12:50:00", "b": 407.75}, {"a": "2024-11-27 12:55:00", "b": 406.5}, {"a": "2024-11-27 13:00:00", "b": 412.75}, {"a": "2024-11-27 13:05:00", "b": 428.0}, {"a": "2024-11-27 13:10:00", "b": 410.4}, {"a": "2024-11-27 13:15:00", "b": 407.3333333333333}, {"a": "2024-11-27 13:20:00", "b": 411.0}, {"a": "2024-11-27 13:25:00", "b": 415.3333333333333}, {"a": "2024-11-27 13:30:00", "b": 415.6}, {"a": "2024-11-27 13:35:00", "b": 412.75}, {"a": "2024-11-27 13:40:00", "b": 437.8}, {"a": "2024-11-27 13:45:00", "b": 436.75}, {"a": "2024-11-27 13:50:00", "b": 427.8}, {"a": "2024-11-27 13:55:00", "b": 414.0}, {"a": "2024-11-27 14:00:00", "b": 409.6666666666667}, {"a": "2024-11-27 14:05:00", "b": 406.0}, {"a": "2024-11-27 14:10:00", "b": 406.5}, {"a": "2024-11-27 14:15:00", "b": 407.6666666666667}, {"a": "2024-11-27 14:20:00", "b": 428.5}, {"a": "2024-11-27 14:25:00", "b": 420.8}, {"a": "2024-11-27 14:30:00", "b": 403.3333333333333}, {"a": "2024-11-27 14:35:00", "b": 402.25}, {"a": "2024-11-27 14:40:00", "b": 402.0}, {"a": "2024-11-27 14:45:00", "b": 402.0}, {"a": "2024-11-27 14:50:00", "b": 403.3333333333333}, {"a": "2024-11-27 14:55:00", "b": 403.3333333333333}, {"a": "2024-11-27 15:00:00", "b": 402.8}, {"a": "2024-11-27 15:05:00", "b": 403.5}, {"a": "2024-11-27 15:10:00", "b": 404.2}, {"a": "2024-11-27 15:15:00", "b": 401.8}, {"a": "2024-11-27 15:20:00", "b": 401.5}, {"a": "2024-11-27 15:25:00", "b": 402.25}, {"a": "2024-11-27 15:30:00", "b": 402.0}, {"a": "2024-11-27 15:35:00", "b": 402.8}, {"a": "2024-11-27 15:40:00", "b": 405.25}, {"a": "2024-11-27 15:45:00", "b": 406.8}, {"a": "2024-11-27 15:50:00", "b": 407.4}, {"a": "2024-11-27 15:55:00", "b": 401.5}, {"a": "2024-11-27 16:00:00", "b": 403.2}, {"a": "2024-11-27 16:05:00", "b": 403.0}, {"a": "2024-11-27 16:10:00", "b": 402.4}, {"a": "2024-11-27 16:15:00", "b": 402.6666666666667}, {"a": "2024-11-27 16:20:00", "b": 402.75}, {"a": "2024-11-27 16:25:00", "b": 403.3333333333333}, {"a": "2024-11-27 16:30:00", "b": 404.5}, {"a": "2024-11-27 16:35:00", "b": 402.6}, {"a": "2024-11-27 16:40:00", "b": 402.0}, {"a": "2024-11-27 16:45:00", "b": 403.0}, {"a": "2024-11-27 16:50:00", "b": 403.5}, {"a": "2024-11-27 16:55:00", "b": 425.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    