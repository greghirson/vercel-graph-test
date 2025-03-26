
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-26 04:00:00", "b": 414.0}, {"a": "2025-03-26 04:05:00", "b": 412.6}, {"a": "2025-03-26 04:10:00", "b": 414.2}, {"a": "2025-03-26 04:15:00", "b": 410.8}, {"a": "2025-03-26 04:20:00", "b": 411.0}, {"a": "2025-03-26 04:25:00", "b": 413.75}, {"a": "2025-03-26 04:30:00", "b": 414.8}, {"a": "2025-03-26 04:35:00", "b": 405.6666666666667}, {"a": "2025-03-26 04:40:00", "b": 408.0}, {"a": "2025-03-26 04:45:00", "b": 416.0}, {"a": "2025-03-26 04:50:00", "b": 415.0}, {"a": "2025-03-26 04:55:00", "b": 412.0}, {"a": "2025-03-26 05:00:00", "b": 418.4}, {"a": "2025-03-26 05:05:00", "b": 427.25}, {"a": "2025-03-26 05:10:00", "b": 424.25}, {"a": "2025-03-26 05:15:00", "b": 426.0}, {"a": "2025-03-26 05:20:00", "b": 422.4}, {"a": "2025-03-26 05:25:00", "b": 420.25}, {"a": "2025-03-26 05:30:00", "b": 425.4}, {"a": "2025-03-26 05:35:00", "b": 423.0}, {"a": "2025-03-26 05:40:00", "b": 414.2}, {"a": "2025-03-26 05:45:00", "b": 410.0}, {"a": "2025-03-26 05:50:00", "b": 409.0}, {"a": "2025-03-26 05:55:00", "b": 409.5}, {"a": "2025-03-26 06:00:00", "b": 410.6666666666667}, {"a": "2025-03-26 06:05:00", "b": 418.4}, {"a": "2025-03-26 06:10:00", "b": 425.0}, {"a": "2025-03-26 06:15:00", "b": 415.2}, {"a": "2025-03-26 06:20:00", "b": 414.25}, {"a": "2025-03-26 06:25:00", "b": 418.8}, {"a": "2025-03-26 06:30:00", "b": 422.6}, {"a": "2025-03-26 06:35:00", "b": 421.4}, {"a": "2025-03-26 06:40:00", "b": 426.6}, {"a": "2025-03-26 06:45:00", "b": 418.25}, {"a": "2025-03-26 06:50:00", "b": 416.25}, {"a": "2025-03-26 06:55:00", "b": 416.75}, {"a": "2025-03-26 07:00:00", "b": 416.75}, {"a": "2025-03-26 07:05:00", "b": 419.8}, {"a": "2025-03-26 07:10:00", "b": 413.25}, {"a": "2025-03-26 07:15:00", "b": 412.3333333333333}, {"a": "2025-03-26 07:20:00", "b": 413.3333333333333}, {"a": "2025-03-26 07:25:00", "b": 414.25}, {"a": "2025-03-26 07:30:00", "b": 411.25}, {"a": "2025-03-26 07:35:00", "b": 408.6666666666667}, {"a": "2025-03-26 07:40:00", "b": 417.5}, {"a": "2025-03-26 07:45:00", "b": 415.6}, {"a": "2025-03-26 07:50:00", "b": 422.6}, {"a": "2025-03-26 07:55:00", "b": 422.4}, {"a": "2025-03-26 08:00:00", "b": 413.8}, {"a": "2025-03-26 08:05:00", "b": 414.4}, {"a": "2025-03-26 08:10:00", "b": 416.6}, {"a": "2025-03-26 08:15:00", "b": 410.25}, {"a": "2025-03-26 08:20:00", "b": 409.0}, {"a": "2025-03-26 08:25:00", "b": 406.0}, {"a": "2025-03-26 08:30:00", "b": 407.5}, {"a": "2025-03-26 08:35:00", "b": 408.5}, {"a": "2025-03-26 08:40:00", "b": 407.0}, {"a": "2025-03-26 08:45:00", "b": 407.0}, {"a": "2025-03-26 08:50:00", "b": 407.3333333333333}, {"a": "2025-03-26 08:55:00", "b": 409.5}, {"a": "2025-03-26 09:00:00", "b": 417.0}, {"a": "2025-03-26 09:05:00", "b": 413.4}, {"a": "2025-03-26 09:10:00", "b": 413.5}, {"a": "2025-03-26 09:15:00", "b": 412.0}, {"a": "2025-03-26 09:20:00", "b": 407.0}, {"a": "2025-03-26 09:25:00", "b": 407.0}, {"a": "2025-03-26 09:30:00", "b": 404.5}, {"a": "2025-03-26 09:35:00", "b": 406.5}, {"a": "2025-03-26 09:40:00", "b": 413.3333333333333}, {"a": "2025-03-26 09:45:00", "b": 408.0}, {"a": "2025-03-26 09:50:00", "b": 406.3333333333333}, {"a": "2025-03-26 09:55:00", "b": 407.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    