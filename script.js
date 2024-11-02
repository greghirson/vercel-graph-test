
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-02 08:20:00", "b": 454.75}, {"a": "2024-11-02 08:25:00", "b": 448.6}, {"a": "2024-11-02 08:30:00", "b": 443.4}, {"a": "2024-11-02 08:35:00", "b": 437.2}, {"a": "2024-11-02 08:40:00", "b": 449.25}, {"a": "2024-11-02 08:45:00", "b": 456.6666666666667}, {"a": "2024-11-02 08:50:00", "b": 455.6}, {"a": "2024-11-02 08:55:00", "b": 460.75}, {"a": "2024-11-02 09:00:00", "b": 452.75}, {"a": "2024-11-02 09:05:00", "b": 461.8}, {"a": "2024-11-02 09:10:00", "b": 466.75}, {"a": "2024-11-02 09:15:00", "b": 456.25}, {"a": "2024-11-02 09:20:00", "b": 468.6}, {"a": "2024-11-02 09:25:00", "b": 479.8}, {"a": "2024-11-02 09:30:00", "b": 467.25}, {"a": "2024-11-02 09:35:00", "b": 473.6}, {"a": "2024-11-02 09:40:00", "b": 467.8}, {"a": "2024-11-02 09:45:00", "b": 461.8}, {"a": "2024-11-02 09:50:00", "b": 466.8}, {"a": "2024-11-02 09:55:00", "b": 481.0}, {"a": "2024-11-02 10:00:00", "b": 468.2}, {"a": "2024-11-02 10:05:00", "b": 452.2}, {"a": "2024-11-02 10:10:00", "b": 474.0}, {"a": "2024-11-02 10:15:00", "b": 482.6}, {"a": "2024-11-02 10:20:00", "b": 474.4}, {"a": "2024-11-02 10:25:00", "b": 481.0}, {"a": "2024-11-02 10:30:00", "b": 471.3333333333333}, {"a": "2024-11-02 10:35:00", "b": 471.6666666666667}, {"a": "2024-11-02 10:40:00", "b": 466.25}, {"a": "2024-11-02 10:45:00", "b": 473.4}, {"a": "2024-11-02 10:50:00", "b": 465.2}, {"a": "2024-11-02 10:55:00", "b": 455.8}, {"a": "2024-11-02 11:00:00", "b": 451.25}, {"a": "2024-11-02 11:05:00", "b": 457.8}, {"a": "2024-11-02 11:10:00", "b": 452.0}, {"a": "2024-11-02 11:15:00", "b": 461.4}, {"a": "2024-11-02 11:20:00", "b": 459.2}, {"a": "2024-11-02 11:25:00", "b": 466.5}, {"a": "2024-11-02 11:30:00", "b": 461.3333333333333}, {"a": "2024-11-02 11:35:00", "b": 464.0}, {"a": "2024-11-02 11:40:00", "b": 469.25}, {"a": "2024-11-02 11:45:00", "b": 475.75}, {"a": "2024-11-02 11:50:00", "b": 465.25}, {"a": "2024-11-02 11:55:00", "b": 466.5}, {"a": "2024-11-02 12:00:00", "b": 537.2}, {"a": "2024-11-02 12:05:00", "b": 617.25}, {"a": "2024-11-02 12:10:00", "b": 627.8}, {"a": "2024-11-02 12:15:00", "b": 636.6}, {"a": "2024-11-02 12:20:00", "b": 650.0}, {"a": "2024-11-02 12:25:00", "b": 641.8}, {"a": "2024-11-02 12:30:00", "b": 639.0}, {"a": "2024-11-02 12:35:00", "b": 636.4}, {"a": "2024-11-02 12:40:00", "b": 631.6}, {"a": "2024-11-02 12:45:00", "b": 640.6666666666666}, {"a": "2024-11-02 12:50:00", "b": 622.6}, {"a": "2024-11-02 12:55:00", "b": 633.2}, {"a": "2024-11-02 13:00:00", "b": 623.4}, {"a": "2024-11-02 13:05:00", "b": 613.4}, {"a": "2024-11-02 13:10:00", "b": 615.75}, {"a": "2024-11-02 13:15:00", "b": 612.0}, {"a": "2024-11-02 13:20:00", "b": 605.8}, {"a": "2024-11-02 13:25:00", "b": 599.8}, {"a": "2024-11-02 13:30:00", "b": 588.5}, {"a": "2024-11-02 13:35:00", "b": 594.2}, {"a": "2024-11-02 13:40:00", "b": 594.6}, {"a": "2024-11-02 13:45:00", "b": 605.0}, {"a": "2024-11-02 13:50:00", "b": 592.0}, {"a": "2024-11-02 13:55:00", "b": 582.2}, {"a": "2024-11-02 14:00:00", "b": 587.25}, {"a": "2024-11-02 14:05:00", "b": 580.6}, {"a": "2024-11-02 14:10:00", "b": 578.2}, {"a": "2024-11-02 14:15:00", "b": 606.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    