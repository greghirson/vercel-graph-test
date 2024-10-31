
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-30 23:10:00", "b": 517.8}, {"a": "2024-10-30 23:15:00", "b": 515.0}, {"a": "2024-10-30 23:20:00", "b": 499.0}, {"a": "2024-10-30 23:25:00", "b": 499.6}, {"a": "2024-10-30 23:30:00", "b": 507.0}, {"a": "2024-10-30 23:35:00", "b": 503.2}, {"a": "2024-10-30 23:40:00", "b": 494.6}, {"a": "2024-10-30 23:45:00", "b": 496.0}, {"a": "2024-10-30 23:50:00", "b": 486.4}, {"a": "2024-10-30 23:55:00", "b": 476.0}, {"a": "2024-10-31 00:00:00", "b": 485.8}, {"a": "2024-10-31 00:05:00", "b": 486.6666666666667}, {"a": "2024-10-31 00:10:00", "b": 479.25}, {"a": "2024-10-31 00:15:00", "b": 465.0}, {"a": "2024-10-31 00:20:00", "b": 447.4}, {"a": "2024-10-31 00:25:00", "b": 457.4}, {"a": "2024-10-31 00:30:00", "b": 460.8}, {"a": "2024-10-31 00:35:00", "b": 462.4}, {"a": "2024-10-31 00:40:00", "b": 459.0}, {"a": "2024-10-31 00:45:00", "b": 450.6666666666667}, {"a": "2024-10-31 00:50:00", "b": 449.6}, {"a": "2024-10-31 00:55:00", "b": 448.6}, {"a": "2024-10-31 01:00:00", "b": 444.0}, {"a": "2024-10-31 01:05:00", "b": 445.0}, {"a": "2024-10-31 01:10:00", "b": 447.4}, {"a": "2024-10-31 01:15:00", "b": 443.6}, {"a": "2024-10-31 01:20:00", "b": 456.5}, {"a": "2024-10-31 01:25:00", "b": 444.8}, {"a": "2024-10-31 01:30:00", "b": 431.5}, {"a": "2024-10-31 01:35:00", "b": 440.0}, {"a": "2024-10-31 01:40:00", "b": 441.5}, {"a": "2024-10-31 01:45:00", "b": 430.0}, {"a": "2024-10-31 01:50:00", "b": 431.8}, {"a": "2024-10-31 01:55:00", "b": 436.8}, {"a": "2024-10-31 02:00:00", "b": 426.2}, {"a": "2024-10-31 02:05:00", "b": 427.0}, {"a": "2024-10-31 02:10:00", "b": 412.6}, {"a": "2024-10-31 02:15:00", "b": 418.0}, {"a": "2024-10-31 02:20:00", "b": 423.5}, {"a": "2024-10-31 02:25:00", "b": 415.75}, {"a": "2024-10-31 02:30:00", "b": 412.25}, {"a": "2024-10-31 02:35:00", "b": 420.25}, {"a": "2024-10-31 02:40:00", "b": 421.75}, {"a": "2024-10-31 02:45:00", "b": 421.75}, {"a": "2024-10-31 02:50:00", "b": 412.8}, {"a": "2024-10-31 02:55:00", "b": 411.6}, {"a": "2024-10-31 03:00:00", "b": 413.25}, {"a": "2024-10-31 03:05:00", "b": 408.0}, {"a": "2024-10-31 03:10:00", "b": 417.25}, {"a": "2024-10-31 03:15:00", "b": 408.5}, {"a": "2024-10-31 03:20:00", "b": 411.6666666666667}, {"a": "2024-10-31 03:25:00", "b": 408.5}, {"a": "2024-10-31 03:30:00", "b": 405.6666666666667}, {"a": "2024-10-31 03:35:00", "b": 406.5}, {"a": "2024-10-31 03:40:00", "b": 407.5}, {"a": "2024-10-31 03:45:00", "b": 407.0}, {"a": "2024-10-31 03:50:00", "b": 408.0}, {"a": "2024-10-31 03:55:00", "b": 408.5}, {"a": "2024-10-31 04:00:00", "b": 410.0}, {"a": "2024-10-31 04:05:00", "b": 406.2}, {"a": "2024-10-31 04:10:00", "b": 405.6666666666667}, {"a": "2024-10-31 04:15:00", "b": 405.5}, {"a": "2024-10-31 04:20:00", "b": 407.0}, {"a": "2024-10-31 04:25:00", "b": 403.75}, {"a": "2024-10-31 04:30:00", "b": 404.8}, {"a": "2024-10-31 04:35:00", "b": 406.0}, {"a": "2024-10-31 04:40:00", "b": 404.0}, {"a": "2024-10-31 04:45:00", "b": 404.5}, {"a": "2024-10-31 04:50:00", "b": 405.0}, {"a": "2024-10-31 04:55:00", "b": 405.0}, {"a": "2024-10-31 05:00:00", "b": 405.5}, {"a": "2024-10-31 05:05:00", "b": 404.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    