
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-28 07:30:00", "b": 471.8}, {"a": "2024-10-28 07:35:00", "b": 480.0}, {"a": "2024-10-28 07:40:00", "b": 478.25}, {"a": "2024-10-28 07:45:00", "b": 487.0}, {"a": "2024-10-28 07:50:00", "b": 499.0}, {"a": "2024-10-28 07:55:00", "b": 526.0}, {"a": "2024-10-28 08:00:00", "b": 552.4}, {"a": "2024-10-28 08:05:00", "b": 543.2}, {"a": "2024-10-28 08:10:00", "b": 538.2}, {"a": "2024-10-28 08:15:00", "b": 542.75}, {"a": "2024-10-28 08:20:00", "b": 525.25}, {"a": "2024-10-28 08:25:00", "b": 515.0}, {"a": "2024-10-28 08:30:00", "b": 510.75}, {"a": "2024-10-28 08:35:00", "b": 509.8}, {"a": "2024-10-28 08:40:00", "b": 507.25}, {"a": "2024-10-28 08:45:00", "b": 501.6}, {"a": "2024-10-28 08:50:00", "b": 501.75}, {"a": "2024-10-28 08:55:00", "b": 503.3333333333333}, {"a": "2024-10-28 09:00:00", "b": 508.25}, {"a": "2024-10-28 09:05:00", "b": 490.4}, {"a": "2024-10-28 09:10:00", "b": 470.8}, {"a": "2024-10-28 09:15:00", "b": 474.4}, {"a": "2024-10-28 09:20:00", "b": 471.5}, {"a": "2024-10-28 09:25:00", "b": 477.4}, {"a": "2024-10-28 09:30:00", "b": 472.3333333333333}, {"a": "2024-10-28 09:35:00", "b": 470.25}, {"a": "2024-10-28 09:40:00", "b": 464.6}, {"a": "2024-10-28 09:45:00", "b": 466.0}, {"a": "2024-10-28 09:50:00", "b": 473.75}, {"a": "2024-10-28 09:55:00", "b": 472.5}, {"a": "2024-10-28 10:00:00", "b": 455.25}, {"a": "2024-10-28 10:05:00", "b": 453.2}, {"a": "2024-10-28 10:10:00", "b": 462.8}, {"a": "2024-10-28 10:15:00", "b": 461.2}, {"a": "2024-10-28 10:20:00", "b": 456.25}, {"a": "2024-10-28 10:25:00", "b": 460.5}, {"a": "2024-10-28 10:30:00", "b": 454.4}, {"a": "2024-10-28 10:35:00", "b": 455.5}, {"a": "2024-10-28 10:40:00", "b": 450.0}, {"a": "2024-10-28 10:45:00", "b": 448.6666666666667}, {"a": "2024-10-28 10:50:00", "b": 452.4}, {"a": "2024-10-28 10:55:00", "b": 439.75}, {"a": "2024-10-28 11:00:00", "b": 431.6}, {"a": "2024-10-28 11:05:00", "b": 434.5}, {"a": "2024-10-28 11:10:00", "b": 440.0}, {"a": "2024-10-28 11:15:00", "b": 425.0}, {"a": "2024-10-28 11:20:00", "b": 437.4}, {"a": "2024-10-28 11:25:00", "b": 444.4}, {"a": "2024-10-28 11:30:00", "b": 442.4}, {"a": "2024-10-28 11:35:00", "b": 439.8}, {"a": "2024-10-28 11:40:00", "b": 433.8}, {"a": "2024-10-28 11:45:00", "b": 428.3333333333333}, {"a": "2024-10-28 11:50:00", "b": 419.8}, {"a": "2024-10-28 11:55:00", "b": 422.5}, {"a": "2024-10-28 12:00:00", "b": 424.5}, {"a": "2024-10-28 12:05:00", "b": 424.5}, {"a": "2024-10-28 12:10:00", "b": 424.6666666666667}, {"a": "2024-10-28 12:15:00", "b": 415.5}, {"a": "2024-10-28 12:20:00", "b": 411.8}, {"a": "2024-10-28 12:25:00", "b": 414.8}, {"a": "2024-10-28 12:30:00", "b": 427.6}, {"a": "2024-10-28 12:35:00", "b": 432.0}, {"a": "2024-10-28 12:40:00", "b": 414.4}, {"a": "2024-10-28 12:45:00", "b": 419.8}, {"a": "2024-10-28 12:50:00", "b": 414.0}, {"a": "2024-10-28 12:55:00", "b": 410.75}, {"a": "2024-10-28 13:00:00", "b": 409.0}, {"a": "2024-10-28 13:05:00", "b": 415.2}, {"a": "2024-10-28 13:10:00", "b": 410.25}, {"a": "2024-10-28 13:15:00", "b": 411.0}, {"a": "2024-10-28 13:20:00", "b": 411.0}, {"a": "2024-10-28 13:25:00", "b": 413.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    